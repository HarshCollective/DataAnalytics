import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  score?: string;
}

export async function POST(
  request: Request, 
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();
    console.log(currentUser)
  if (!currentUser) {
    return NextResponse.error();
  }
  const {score} = await request.json();
  console.log(score , "--------------------------------    ")
  prisma.$connect();

  const user = await prisma.questions.create({
    data: {
        score, 
        userEmail: currentUser.user?.email || "",
    }
  });


  return NextResponse.json(user);
}

export async function GET(
    request: Request, 
  ) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.error();
    }
    prisma.$connect();
  
    const user = await prisma.questions.findMany();
    const userQuestion = user.find((ques) => ques.userEmail ===   currentUser.user?.email) || {};
  
    console.log(userQuestion, "dasd")
    return NextResponse.json(userQuestion);
  }
