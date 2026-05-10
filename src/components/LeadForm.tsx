import { useState } from "react"
import func2url from "../../backend/func2url.json"

export function LeadForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch(func2url.leads, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      })

      if (res.ok) {
        setStatus("success")
        setName("")
        setPhone("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="lead-form" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Оставить заявку</p>
          <h2 className="text-4xl font-medium tracking-tight mb-4">
            Управление вашей квартирой
          </h2>
          <p className="text-muted-foreground mb-10">
            Оставьте имя и телефон — мы свяжемся и расскажем об условиях.
          </p>

          {status === "success" ? (
            <div className="py-10 text-center">
              <p className="text-xl font-medium mb-2">Заявка принята!</p>
              <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-border bg-background px-5 py-4 text-sm focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border border-border bg-background px-5 py-4 text-sm focus:outline-none focus:border-foreground transition-colors"
              />
              {status === "error" && (
                <p className="text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-foreground text-background py-4 text-sm tracking-wide hover:bg-foreground/90 transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
