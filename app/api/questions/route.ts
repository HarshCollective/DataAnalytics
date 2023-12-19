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
  const data = await request.json();
  const score = data.score;
  console.log(data)
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
    // await prisma.questions.deleteMany();
    const questions = await prisma.questions.findMany();
    console.log(questions)
    const userQuestion = questions.find((ques) => ques.userEmail ===   currentUser.user?.email) || {};

    console.log(userQuestion, "--------------------------------");
  
    return NextResponse.json(userQuestion);
  }
