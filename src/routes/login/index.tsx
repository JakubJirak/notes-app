import { LoginForm } from "@/components/login/LoginForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex mt-10 items-center justify-center">
      <LoginForm />
    </div>
  );
}