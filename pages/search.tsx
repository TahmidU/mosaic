import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const searchResults = {};

  return {
    props: {
      searchResults: {},
    },
  };
};

export { default } from "components/pages/SearchPage";
