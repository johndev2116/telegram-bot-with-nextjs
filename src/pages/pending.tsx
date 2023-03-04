import { PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import React from "react";
import Table from "../components/Pending/Table";
import { authOptions } from "./api/auth/[...nextauth]";

const Pending = () => {
  return (
    <div className="w-full">
      <Table />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Pending;
