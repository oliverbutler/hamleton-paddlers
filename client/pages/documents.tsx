import React from "react";
import { motion } from "framer-motion";
import Documents from "components/Documents";
import axios from "axios";
import { getInstance } from "utils/axios";

const documents = ({ documents }) => {
  return (
    <main className="container my-5" style={{ minHeight: "75vh" }}>
      <div className="content">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="title">Documents</h1>
          <p>
            These documents are mainly as a backup in case of a technical fault
            with the web application - under normal circumstances none of them
            should be required
          </p>
          <Documents documents={documents} />
        </motion.div>
      </div>
    </main>
  );
};

export default documents;

export const getStaticProps = async () => {
  const documents = await getInstance()
    .get("/documents")
    .then((res) => res.data)
    .catch(() => null);

  if (!documents) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      documents,
    },
    revalidate: 1,
  };
};
