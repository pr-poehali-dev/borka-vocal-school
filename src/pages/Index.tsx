import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const events = [
    { date: '2025-09-05', title: 'Квартирник "Первые шаги"', time: '19:00', type: 'квартирник' },
    { date: '2025-09-12', title: 'Мастер-класс "Сценическая свобода"', time: '18:00', type: 'мастер-класс' },
    { date: '2025-09-19', title: 'Отчётный концерт студентов', time: '19:30', type: 'концерт' },
    { date: '2025-09-26', title: 'Квартирник "Осенние мелодии"', time: '19:00', type: 'квартирник' }
  ];

  const teachers = [
    {
      name: 'Анна Волкова',
      specialization: 'Эстрадный вокал',
      experience: '8 лет',
      style: 'Бережный подход к голосу, работа с эмоциями'
    },
    {
      name: 'Дмитрий Соколов',
      specialization: 'Джаз и соул',
      experience: '12 лет',
      style: 'Импровизация, развитие музыкального слуха'
    },
    {
      name: 'Мария Петрова',
      specialization: 'Классический вокал',
      experience: '15 лет',
      style: 'Академическая техника, постановка дыхания'
    }
  ];

  const programs = [
    {
      title: 'Для начинающих',
      description: 'Первые шаги в мире вокала',
      price: '3000₽/месяц',
      features: ['Постановка дыхания', 'Работа с зажимами', 'Базовая техника']
    },
    {
      title: 'Продвинутый уровень',
      description: 'Для тех, кто уже поёт',
      price: '4000₽/месяц',
      features: ['Сценическое мастерство', 'Работа с микрофоном', 'Студийная запись']
    },
    {
      title: 'Интенсив "К звёздам"',
      description: 'Подготовка к выступлениям',
      price: '5500₽/месяц',
      features: ['Индивидуальный репертуар', 'Поддержка психолога', 'Концертная деятельность']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-orange/5">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mic2" className="text-coral" size={32} />
              <span className="text-2xl font-bold text-coral">Школа Борка</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#programs" className="hover:text-coral transition-colors">Программы</a>
              <a href="#teachers" className="hover:text-coral transition-colors">Педагоги</a>
              <a href="#events" className="hover:text-coral transition-colors">Мероприятия</a>
              <a href="#prices" className="hover:text-coral transition-colors">Цены</a>
              <a href="#contacts" className="hover:text-coral transition-colors">Контакты</a>
            </div>

            <Button className="bg-coral hover:bg-coral/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-coral/10 via-turquoise/10 to-orange/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-navy">
                🎤 Школа Борка — ваш путь к творческой свободе
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Мы создали пространство для взрослых, которые мечтают петь и заниматься творчеством, 
                но годами откладывали из-за страха, неуверенности или нехватки времени.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                  <Icon name="Star" size={20} className="mr-2" />
                  Первый урок 500₽
                </Button>
                <Button size="lg" variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть видео
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/a3cc0fba-34dc-4c89-bad0-6714292d4897.jpg" 
                alt="Музыкальная школа" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" className="text-coral" />
                  <span className="font-semibold">500+ студентов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">✨ Что мы предлагаем</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" size={32} className="text-coral" />
                </div>
                <CardTitle>Для новичков</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Первый урок всего за 500 рублей. Познакомитесь с педагогом и поймёте, подходим ли мы друг другу.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Music" size={32} className="text-turquoise" />
                </div>
                <CardTitle>Квартирники и концерты</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Уютные вечера и камерные концерты, где вас встречают аплодисментами, а не оценками.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mic" size={32} className="text-orange" />
                </div>
                <CardTitle>Студийная запись</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Поможем подготовиться к записи в Zamuruev Studio с профессиональным оборудованием.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Программы обучения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-coral">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4 text-navy">{program.price}</div>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" size={16} className="text-coral mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-turquoise hover:bg-turquoise/90">
                    Выбрать программу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section id="teachers" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Наши педагоги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-r from-coral to-turquoise rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src="/img/2a57c994-e961-438d-8b62-bd7cc26c46c4.jpg" 
                      alt={teacher.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-navy">{teacher.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mb-2">{teacher.specialization}</Badge>
                    <br />
                    Опыт: {teacher.experience}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{teacher.style}</p>
                  <Button variant="outline" className="mt-4 border-coral text-coral hover:bg-coral hover:text-white">
                    Записаться к педагогу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section id="events" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Календарь мероприятий</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-coral">Выберите дату</h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border shadow-sm"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-turquoise">Ближайшие события</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-navy">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            <Icon name="Calendar" size={14} className="inline mr-1" />
                            {event.date} в {event.time}
                          </p>
                        </div>
                        <Badge 
                          variant={event.type === 'концерт' ? 'default' : 'secondary'}
                          className={event.type === 'концерт' ? 'bg-coral' : ''}
                        >
                          {event.type}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-navy">Как начать?</h2>
            <p className="text-xl text-muted-foreground">Простые шаги к вашей творческой свободе</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-coral">
              <CardHeader>
                <div className="w-12 h-12 bg-coral text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <CardTitle>Выберите педагога</CardTitle>
              </CardHeader>
              <CardContent>
                <p>У каждого свой стиль преподавания — найдите того, кто подходит именно вам.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-turquoise">
              <CardHeader>
                <div className="w-12 h-12 bg-turquoise text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <CardTitle>Первый урок</CardTitle>
              </CardHeader>
              <CardContent>
                <p>55 минут знакомства всего за 500₽, чтобы понять, как мы работаем.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange">
              <CardHeader>
                <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <CardTitle>Скидка 25%</CardTitle>
              </CardHeader>
              <CardContent>
                <p>На первую оплату при продолжении обучения в течение 3 дней.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-coral/10 to-turquoise/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-navy">
              «Мы не учим петь идеально — мы учим получать удовольствие от своего голоса»
            </h3>
            <Button size="lg" className="bg-gradient-to-r from-coral to-turquoise hover:opacity-90 text-white">
              <Icon name="Heart" size={20} className="mr-2" />
              Начать своё путешествие
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Отзывы студентов</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "Никогда не думала, что смогу петь перед людьми. Здесь я обрела уверенность и нашла свой голос!"
                </p>
                <div className="font-semibold text-navy">— Анна, 34 года</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "Квартирники — это волшебство! Поддержка и понимание на каждом шагу."
                </p>
                <div className="font-semibold text-navy">— Михаил, 42 года</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "Записал свою первую песню в студии! Мечта детства наконец стала реальностью."
                </p>
                <div className="font-semibold text-navy">— Елена, 28 лет</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Контакты</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-coral">Как до нас добраться</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-coral mt-1" />
                  <div>
                    <h4 className="font-semibold">Адрес вокального кабинета</h4>
                    <p className="text-muted-foreground">ул. Дзержинского, 56</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-turquoise mt-1" />
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-muted-foreground">+7 924 619 21 87</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Globe" size={24} className="text-orange mt-1" />
                  <div>
                    <h4 className="font-semibold">Сайт</h4>
                    <p className="text-muted-foreground">shkolaborka.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-coral">Записаться на урок</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Имя</label>
                  <input className="w-full p-3 border rounded-lg mt-1" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium">Телефон</label>
                  <input className="w-full p-3 border rounded-lg mt-1" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium">Выберите педагога</label>
                  <select className="w-full p-3 border rounded-lg mt-1">
                    <option>Любой педагог</option>
                    <option>Анна Волкова</option>
                    <option>Дмитрий Соколов</option>
                    <option>Мария Петрова</option>
                  </select>
                </div>
                <Button className="w-full bg-gradient-to-r from-coral to-turquoise hover:opacity-90 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Mic2" size={32} className="text-coral" />
                <span className="text-2xl font-bold">Школа Борка</span>
              </div>
              <p className="text-gray-300">
                Ваш путь к творческой свободе начинается здесь.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <a href="#programs" className="block hover:text-coral transition-colors">Программы</a>
                <a href="#teachers" className="block hover:text-coral transition-colors">Педагоги</a>
                <a href="#events" className="block hover:text-coral transition-colors">Мероприятия</a>
                <a href="#contacts" className="block hover:text-coral transition-colors">Контакты</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="hover:text-coral cursor-pointer transition-colors" />
                <Icon name="Music" size={24} className="hover:text-coral cursor-pointer transition-colors" />
                <Icon name="Youtube" size={24} className="hover:text-coral cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Школа Борка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}