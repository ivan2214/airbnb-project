import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      roomCount,
      guestCount,
      bathroomCount,
      locationValue,
      startDate,
      endDate,
      category,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (roomCount) {
      query.roomCount = {
        gte: +roomCount, // operador "greater than or equal to" (>=) para asegurarse de que solo se devuelvan los listados que tienen al menos esa cantidad de habitaciones.
      };
    }

    if (guestCount) {
      query.guestCount = {
        gte: +guestCount, // operador "greater than or equal to" (>=) para asegurarse de que solo se devuelvan los listados que tienen al menos esa cantidad de habitaciones.
      };
    }

    if (bathroomCount) {
      query.bathroomCount = {
        gte: +bathroomCount,
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            // Busca si hay alguna reserva que cumpla la siguiente condición
            OR: [
              // Busca si se cumple al menos una de las siguientes dos condiciones
              {
                // Condición 1
                endDate: { gte: startDate }, // La fecha de finalización de la reserva es mayor o igual a la fecha de inicio del rango proporcionado
                startDate: { lte: startDate }, // La fecha de inicio de la reserva es menor o igual a la fecha de inicio del rango proporcionado
              },
              {
                // Condición 2
                startDate: { lte: endDate }, // La fecha de inicio de la reserva es menor o igual a la fecha de finalización del rango proporcionado
                endDate: { gte: endDate }, // La fecha de finalización de la reserva es mayor o igual a la fecha de finalización del rango proporcionado
              },
            ],
          },
        },
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
