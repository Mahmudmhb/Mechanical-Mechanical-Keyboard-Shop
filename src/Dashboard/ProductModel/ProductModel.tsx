import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { SubmitHandler, useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { IFormInput } from "@/types/types";
import { useEffect } from "react";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/Redux/features/products/productsApi";

const ProductModel = ({ update }: { update: string }) => {
  const [updateProduct] = useUpdateProductMutation();

  const { data: modelProduct } = useGetSingleProductQuery(update);
  const product = modelProduct?.data;

  const { register, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      brand: "",
      availableQuantity: 0,
      rating: 0,
    },
  });

  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        price: product.price,
        description: product.description,
        brand: product.brand,
        availableQuantity: product.availableQuantity,
        rating: product.rating,
      });
    }
  }, [product, reset]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // dispatch(updateProduct({ ...product, ...data }));
    console.log(data);
    await updateProduct({ ...product, ...data }).unwrap();
  };

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <FaEdit />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  className="w-full rounded-lg p-2 border border-slate-400"
                  {...register("title", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  className="w-full rounded-lg p-2 border border-slate-400"
                  id="price"
                  {...register("price", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <textarea
                  className="w-full rounded-lg p-2 border border-slate-400"
                  id="description"
                  {...register("description", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="brand">Brand:</label>
                <input
                  type="text"
                  className="w-full rounded-lg p-2 border border-slate-400"
                  id="brand"
                  {...register("brand", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="availableQuantity">Available Quantity:</label>
                <input
                  type="number"
                  className="w-full rounded-lg p-2 border border-slate-400"
                  id="availableQuantity"
                  {...register("availableQuantity", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="rating">Rating:</label>
                <input
                  type="number"
                  className="w-full rounded-lg p-2 border border-slate-400"
                  id="rating"
                  {...register("rating", { required: true })}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit" className="bg-primary-gradient">
                    Update Product
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductModel;
