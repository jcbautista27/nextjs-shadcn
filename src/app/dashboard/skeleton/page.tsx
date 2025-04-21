import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "123456789".split(''); //['1','2','3','4','5','6','7','8','9']
};

export default async function Page() {
  const data = await getData()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex items-center">
            <Image
              src={"https://github.com/shadcn.png"}
              alt={"shadcn"}
              width={40}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />
            <div>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Descriptions</CardDescription>
            </div>
          </CardHeader>

          <CardFooter className=" flex justify-end">
            <Button>Más...</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
