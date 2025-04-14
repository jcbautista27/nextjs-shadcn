import { Button } from "@/components/ui/button";
import { ChevronRight, Loader, MailOpen } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>Default</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"success"}>success</Button>
      <Button disabled>disable</Button>
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>
      <Button>
        <MailOpen /> Login with Email
      </Button>
      <Button disabled>
        <Loader className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
