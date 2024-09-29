import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/schema/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  // Defining your form.
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  // Defining a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    form.reset();
    console.log(values);
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            Can't find what you're looking for? Send us a message and we'll get
            back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p>
                Your message has been received. We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="container">
                  Send Message
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default ContactUs;
