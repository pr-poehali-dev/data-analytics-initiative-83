import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl font-medium tracking-tight mb-10">Согласие на обработку персональных данных</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">1. Оператор персональных данных</h2>
              <p>
                Оператором персональных данных является ООО «Стройфабрика» (далее — «Оператор»). Обработка персональных данных осуществляется в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">2. Состав персональных данных</h2>
              <p>
                Оператор обрабатывает следующие персональные данные, предоставляемые Пользователем при заполнении формы на сайте: имя и номер телефона.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">3. Цели обработки</h2>
              <p>
                Персональные данные обрабатываются исключительно в целях: обратной связи с Пользователем по оставленной заявке; информирования об услугах Компании; заключения и исполнения договора на оказание услуг.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">4. Способы обработки</h2>
              <p>
                Обработка персональных данных осуществляется без передачи третьим лицам, без трансграничной передачи, с использованием средств автоматизации и без них. Хранение данных осуществляется на защищённых серверах на территории Российской Федерации.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">5. Срок хранения</h2>
              <p>
                Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не более 3 лет с момента их предоставления, либо до отзыва согласия Пользователем.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">6. Права пользователя</h2>
              <p>
                Пользователь вправе в любое время отозвать своё согласие на обработку персональных данных, направив письменное заявление на адрес: <a href="mailto:hello@prostranstvo.ru" className="text-foreground underline underline-offset-4">hello@prostranstvo.ru</a>. После получения отзыва Оператор прекращает обработку данных и удаляет их в течение 30 дней.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">7. Согласие</h2>
              <p>
                Отправляя форму на сайте, Пользователь выражает свободное, конкретное и информированное согласие на обработку своих персональных данных в соответствии с настоящим документом.
              </p>
            </div>

            <p className="text-sm">Последнее обновление: май 2025 г.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
