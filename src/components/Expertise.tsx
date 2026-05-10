import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const expertiseAreas = [
  {
    title: "Ремонт квартир",
    description: "Косметический, капитальный и дизайнерский ремонт квартир любой площади. Работаем с новостройками и вторичным жильём.",
    icon: "Home",
  },
  {
    title: "Строительство домов",
    description:
      "Строим частные дома, коттеджи и таунхаусы под ключ: от фундамента до финишной отделки с полным контролем качества.",
    icon: "Building2",
  },
  {
    title: "Ремонт офисов",
    description:
      "Создаём комфортные и функциональные рабочие пространства с соблюдением сроков и без остановки работы вашего бизнеса.",
    icon: "Wrench",
  },
  {
    title: "Чистовая отделка",
    description:
      "Финишная отделка под ключ: укладка плитки, паркета, покраска, оклейка обоями, монтаж потолков и всё остальное.",
    icon: "PaintBucket",
  },
  {
    title: "Управление арендными квартирами и апартаментами",
    description:
      "Берём на себя полное управление арендной недвижимостью: поиск жильцов, контроль состояния, решение бытовых вопросов и своевременная отчётность.",
    icon: "KeyRound",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Услуги</HighlightedText>, которые
            <br />
            говорят сами
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Один сервис — все виды работ. Находим проверенных подрядчиков для любого объекта: квартира, дом или офис.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon name={area.icon} size={40} className="mb-4 text-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}