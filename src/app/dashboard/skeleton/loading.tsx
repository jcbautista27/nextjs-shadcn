import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "react-day-picker";

export default function Loading() {
  const data = "123456789".split("");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex">
            <Skeleton className="rounded-full mr-2 w-10 h-10" />
            <div className="flex-col grow">
              <Skeleton className="h-4 w-1/2 mb-2"/>
              <Skeleton className="h-3 w-full"/>
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
            <Skeleton className="h-8 w-20"/>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
