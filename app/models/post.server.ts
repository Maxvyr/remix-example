import { Post } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  const res = await prisma.post.findUnique({ where: { slug } });
  return res;
}

export async function createPost(
  post : Pick<Post, "slug" | "title" | "markdown">
  ) {
  return prisma.post.create({ data: post });
  
}