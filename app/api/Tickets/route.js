import { NextResponse } from "next/server";
import Ticket from "@/models/Ticket";

export async function Post(req) {
  try {
    const body = await req.json();
    console.log(body);
    const newTicket = await Ticket.create(body);
    newTicket.save();
    return NextResponse.json(
      { message: "Ticket created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
