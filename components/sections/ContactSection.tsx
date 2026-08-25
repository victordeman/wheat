"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle, AlertCircle, Loader2, MapPin, Mail, Phone } from "lucide-react";

interface ContactSectionProps {
  defaultPathway?: ContactFormData["pathway"];
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  defaultPathway = "public",
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{
    message: string;
    referenceId: string;
  } | null>(null);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      organisation: "",
      email: "",
      pathway: defaultPathway || "public",
      message: "",
    },
  });

  useEffect(() => {
    if (defaultPathway) {
      setValue("pathway", defaultPathway);
    }
  }, [defaultPathway, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setSuccessResponse(null);
    setErrorResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok && responseData.success) {
        setSuccessResponse({
          message: responseData.message,
          referenceId: responseData.referenceId,
        });
        reset();
      } else {
        setErrorResponse(
          responseData.message || "Failed to submit correspondence. Please try again."
        );
      }
    } catch {
      setErrorResponse(
        "A network error occurred while dispatching your request."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-brand-canvas border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-deep">
            Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark">
            Write to the Programme Delivery Unit.
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Official telephone, email and social channels will be published here as soon as they are designated. Until then, this form is the public correspondence channel for Project WHEAT-NESS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Institutional Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="default" className="bg-white p-8 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-brand-dark border-b border-brand-border pb-4">
                Programme Headquarters
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-gold-deep flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-dark font-semibold">Address</strong>
                    <span className="text-gray-600">
                      2nd Floor, Tower 1, Bank of Industry, Central Business District, Abuja, Nigeria
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Mail className="w-5 h-5 text-brand-gold-deep flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-dark font-semibold">Email</strong>
                    <span className="text-gray-600">info@projectwheatness.gov.ng</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Phone className="w-5 h-5 text-brand-gold-deep flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-dark font-semibold">Phone</strong>
                    <span className="text-gray-600">+234 800 WHEATNESS</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Card variant="default" className="bg-white p-8">
              {successResponse ? (
                <div className="space-y-4 p-6 bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <div className="flex items-center gap-2 font-serif text-xl font-bold text-emerald-950">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                    <span>Correspondence Logged</span>
                  </div>
                  <p className="text-sm">{successResponse.message}</p>
                  <div className="text-xs font-mono bg-white p-3 border border-emerald-200">
                    Reference ID: <span className="font-bold text-brand-dark">{successResponse.referenceId}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSuccessResponse(null)}
                    className="mt-2"
                  >
                    Submit Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {errorResponse && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span>{errorResponse}</span>
                    </div>
                  )}

                  <Input
                    label="Full name"
                    placeholder="Enter your full name"
                    {...register("fullName")}
                    error={errors.fullName?.message}
                  />

                  <Input
                    label="Organisation"
                    placeholder="Company or institution name"
                    {...register("organisation")}
                    error={errors.organisation?.message}
                  />

                  <Input
                    label="Email address"
                    type="email"
                    placeholder="name@organisation.gov.ng"
                    {...register("email")}
                    error={errors.email?.message}
                  />

                  <div className="w-full flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-brand-dark">
                      Pathway
                    </label>
                    <select
                      {...register("pathway")}
                      className="w-full px-3.5 py-2.5 bg-white border border-brand-border text-brand-text text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    >
                      <option value="millers">Millers & Processors</option>
                      <option value="msmes">MSME Bakery Enterprises</option>
                      <option value="investors">Investors & OPS</option>
                      <option value="public">General Public Inquiry</option>
                    </select>
                    {errors.pathway && (
                      <span className="text-xs text-red-600">{errors.pathway.message}</span>
                    )}
                  </div>

                  <Textarea
                    label="Message"
                    placeholder="Describe your inquiry or partnership intent..."
                    {...register("message")}
                    error={errors.message?.message}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={submitting}
                    className="w-full justify-center"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      "Submit correspondence"
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
