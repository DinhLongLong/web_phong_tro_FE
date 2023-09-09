import services from "../index";

const handleGetListProducts = async () => {
  try {
    const res = await services.get("api/products");

    if (res && res.status === 200 && res.data) {
      return {
        status: res.status,
        data: res.data,
        message: "Success",
      };
    }

    return {
      data: [],
      status: 500,
      message: "Error",
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error :>", error);

    return {
      data: [],
      status: 500,
      message: error,
    };
  }
};

export { handleGetListProducts };
