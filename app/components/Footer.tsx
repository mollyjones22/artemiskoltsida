"use client";

import type { FormEvent } from "react";

export default function Footer() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const replyTo = String(formData.get("replyTo") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const address = [
      97, 114, 116, 101, 109, 105, 115, 46, 107, 111, 108, 116, 115, 105, 100,
      97, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109,
    ]
      .map((code) => String.fromCharCode(code))
      .join("");
    const body = [message, replyTo ? `\n\nReply to: ${replyTo}` : ""].join("");
    const params = new URLSearchParams({
      subject: "Portfolio message",
      body,
    });

    window.location.href = `mailto:${address}?${params.toString()}`;
  }

  return (
    <footer className="bg-white px-4 py-6 sm:px-6 sm:py-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 text-center"
      >
        <p className="text-sm font-semibold tracking-wider sm:text-base">E-mail me</p>
        <input
          type="email"
          name="replyTo"
          placeholder="Your e-mail"
          className="w-full border border-black bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#0000ee]"
        />
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Write your message"
          className="w-full resize-y border border-black bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#0000ee]"
        />
        <button
          type="submit"
          className="border border-black bg-white px-4 py-2 text-sm font-semibold tracking-wider text-black hover:border-[#0000ee] hover:text-[#0000ee]"
        >
          Send
        </button>
      </form>
    </footer>
  );
}
