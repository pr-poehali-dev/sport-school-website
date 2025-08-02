import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [accessibilityMode, setAccessibilityMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const news = [
    {
      id: 1,
      title: "Победа юниоров на областном чемпионате",
      content: "Наша команда заняла первое место в областном чемпионате по футболу среди юниоров до 16 лет.",
      date: "15 июля 2024",
      image: "/img/00ae3963-ea40-4f74-bf15-3048d3b4ff77.jpg"
    },
    {
      id: 2,
      title: "Новые тренировочные программы",
      content: "Запускаем инновационные тренировочные программы для развития технических навыков футболистов.",
      date: "10 июля 2024",
      image: "/img/51add1db-0110-4bb7-9846-a17f525717ea.jpg"
    },
    {
      id: 3,
      title: "Летний футбольный лагерь",
      content: "Открыта регистрация на летний футбольный лагерь для детей от 6 до 16 лет.",
      date: "5 июля 2024",
      image: "/img/00ae3963-ea40-4f74-bf15-3048d3b4ff77.jpg"
    }
  ];

  const organizationInfo = [
    { title: "Основные сведения", content: "ДЮСШ 'Торпедо' - муниципальное учреждение дополнительного образования, специализирующееся на подготовке футболистов." },
    { title: "Структура и органы управления", content: "Директор, заместители директора, тренерский состав, административно-хозяйственная служба." },
    { title: "Документы", content: "Устав, лицензия на образовательную деятельность, программы обучения." },
    { title: "Образование", content: "Дополнительные общеобразовательные программы физкультурно-спортивной направленности." },
    { title: "Платные образовательные услуги", content: "Индивидуальные тренировки, специализированные курсы подготовки." },
    { title: "Педагогический состав", content: "Квалифицированные тренеры с высшим физкультурным образованием, регулярно проходящие курсы повышения квалификации." },
    { title: "Руководство", content: "Директор школы - Иванов И.И., заместитель директора по спортивной работе - Петров П.П." },
    { title: "Материально-техническое обеспечение и оснащенность образовательного процесса", content: "2 футбольных поля с натуральным покрытием, спортивный зал, тренажерный зал, раздевалки, медицинский кабинет." },
    { title: "Доступная среда", content: "Здание оборудовано пандусами, адаптированными санитарными узлами для людей с ограниченными возможностями." },
    { title: "Финансово-хозяйственная деятельность", content: "Финансирование из муниципального бюджета, дополнительные средства от платных услуг и спонсорской помощи." },
    { title: "Вакантные места для приема (перевода) обучающихся", content: "Группы начальной подготовки - 15 мест, учебно-тренировочные группы - 8 мест." },
    { title: "Стипендии и иные выплаты материальной поддержки", content: "Стипендии лучшим спортсменам, материальная помощь малообеспеченным семьям." },
    { title: "Международное сотрудничество", content: "Партнерские отношения с футбольными академиями Германии и Испании, обмен опытом." },
    { title: "Организация питания в образовательной организации", content: "Столовая на 50 посадочных мест, сбалансированное питание для спортсменов." },
    { title: "Дополнительная информация", content: "Школа является участником федеральной программы развития детского футбола." },
    { title: "Вакансии", content: "Требуются: тренер по футболу (высшее образование), медицинский работник (среднее специальное образование)." }
  ];

  const galleryImages = [
    { id: 1, src: "/img/e6e0d7fb-251a-4356-ba73-f249e6f1f9c3.jpg", category: "team", title: "Команда сезона 2024" },
    { id: 2, src: "/img/c8c98bff-3808-476f-b3e5-7e6a5b969fb9.jpg", category: "training", title: "Тренировочный процесс" },
    { id: 3, src: "/img/f0529f05-344f-42c2-90b6-a4128b5b6d81.jpg", category: "achievements", title: "Церемония награждения" },
    { id: 4, src: "/img/bf8adfa5-0242-4f0d-9e7e-4d8408128ad3.jpg", category: "facilities", title: "Спортивный зал" },
    { id: 5, src: "/img/19a62bc6-1968-427f-82b3-5b4ca210b608.jpg", category: "training", title: "Отработка техники" },
    { id: 6, src: "/img/8c98fd08-3d9f-4c33-b54a-bf2c5d9e265b.jpg", category: "team", title: "Подготовка к матчу" },
    { id: 7, src: "/img/00ae3963-ea40-4f74-bf15-3048d3b4ff77.jpg", category: "training", title: "Полевые тренировки" },
    { id: 8, src: "/img/51add1db-0110-4bb7-9846-a17f525717ea.jpg", category: "facilities", title: "Футбольное поле" }
  ];

  const videos = [
    { id: 1, title: "Тренировка юниоров", thumbnail: "/img/c8c98bff-3808-476f-b3e5-7e6a5b969fb9.jpg", duration: "3:45" },
    { id: 2, title: "Лучшие голы сезона", thumbnail: "/img/f0529f05-344f-42c2-90b6-a4128b5b6d81.jpg", duration: "5:20" },
    { id: 3, title: "День открытых дверей", thumbnail: "/img/e6e0d7fb-251a-4356-ba73-f249e6f1f9c3.jpg", duration: "8:15" },
    { id: 4, title: "Мастер-класс от тренеров", thumbnail: "/img/19a62bc6-1968-427f-82b3-5b4ca210b608.jpg", duration: "12:30" }
  ];

  const categories = [
    { id: 'all', name: 'Все фото' },
    { id: 'team', name: 'Команда' },
    { id: 'training', name: 'Тренировки' },
    { id: 'achievements', name: 'Достижения' },
    { id: 'facilities', name: 'Объекты' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  useEffect(() => {
    document.body.className = accessibilityMode ? 'accessibility-mode' : '';
  }, [accessibilityMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`min-h-screen ${accessibilityMode ? 'bg-black text-yellow-400 text-xl' : 'bg-white'}`}>
      {/* Accessibility Toggle */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white p-2 rounded-lg shadow-lg">
        <Icon name="Eye" size={16} />
        <Switch
          checked={accessibilityMode}
          onCheckedChange={setAccessibilityMode}
          aria-label="Версия для слабовидящих"
        />
        <span className="text-sm">Версия для слабовидящих</span>
      </div>

      {/* Header */}
      <header className={`py-4 px-6 ${accessibilityMode ? 'bg-yellow-400 text-black' : 'bg-primary text-white'}`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Trophy" size={32} />
            <div>
              <h1 className="text-2xl font-bold">ДЮСШ "Торпедо"</h1>
              <p className="text-sm opacity-90">Детско-юношеская спортивная школа</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#news" className="hover:underline">Новости</a>
            <a href="#about" className="hover:underline">О школе</a>
            <a href="#gallery" className="hover:underline">Галерея</a>
            <a href="#info" className="hover:underline">Сведения</a>
            <a href="#contacts" className="hover:underline">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 px-6 ${accessibilityMode ? 'bg-gray-900' : 'bg-gradient-to-r from-black to-secondary'} text-primary`}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Футбольная школа будущих чемпионов</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Развиваем талант, воспитываем характер, готовим профессиональных футболистов
          </p>
          <Button size="default" variant={accessibilityMode ? "default" : "secondary"} className="px-6 py-2">
            Записаться на тренировку
          </Button>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Новости школы</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {news.map((item) => (
                <CarouselItem key={item.id}>
                  <Card className={`h-full ${accessibilityMode ? 'bg-gray-800 border-yellow-400' : ''}`}>
                    <CardContent className="p-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <div className="p-6">
                        <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 px-6 ${accessibilityMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">О нашей школе</h2>
              <p className="mb-3">
                ДЮСШ "Торпедо" - ведущая футбольная школа региона с 30-летней историей подготовки профессиональных спортсменов.
              </p>
              <p className="mb-4">
                Мы предлагаем качественное футбольное образование для детей от 6 до 18 лет, сочетая современные методики тренировок с индивидуальным подходом к каждому ученику.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${accessibilityMode ? 'text-yellow-400' : 'text-primary'}`}>500+</div>
                  <div className="text-sm">Выпускников</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${accessibilityMode ? 'text-yellow-400' : 'text-primary'}`}>15</div>
                  <div className="text-sm">Тренеров</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/51add1db-0110-4bb7-9846-a17f525717ea.jpg" 
                alt="Футбольное поле школы"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={`py-12 px-6 ${accessibilityMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Фото и видео</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${accessibilityMode ? 'border-yellow-400' : ''}`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* Video Gallery */}
          <h3 className="text-xl font-bold text-center mb-6">Видео</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
              <Card key={video.id} className={`group cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105 ${accessibilityMode ? 'bg-gray-800 border-yellow-400' : ''}`}>
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-opacity duration-300">
                      <Icon name="Play" size={48} className="text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm">{video.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Увеличенное изображение"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={24} />
            </Button>
          </div>
        </div>
      )}

      {/* Organization Info */}
      <section id="info" className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Сведения об организации</h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {organizationInfo.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className={accessibilityMode ? 'text-yellow-400' : ''}>
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className={`py-12 px-6 ${accessibilityMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Контакты</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} />
                  <span>г. Москва, ул. Спортивная, д. 15</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} />
                  <span>info@torpedo-football.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} />
                  <span>Пн-Вс: 9:00-21:00</span>
                </div>
              </div>
            </div>
            <Card className={accessibilityMode ? 'bg-gray-800 border-yellow-400' : ''}>
              <CardHeader>
                <CardTitle>Обратная связь</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Textarea
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 px-6 ${accessibilityMode ? 'bg-black border-t border-yellow-400' : 'bg-primary text-white'}`}>
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ДЮСШ "Торпедо". Все права защищены.</p>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;600&display=swap');
        
        body {
          font-family: 'Open Sans', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Roboto', sans-serif;
        }
        
        .accessibility-mode {
          filter: contrast(150%);
        }
        
        .accessibility-mode * {
          transition: none !important;
          animation: none !important;
        }
      `}</style>
    </div>
  );
};

export default Index;