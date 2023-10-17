import React from 'react';
import './Blog.css'; // Import the CSS file
import gcppic from '../../images/gcp.png';
import regpic1 from '../../images/regpic1.png';
import regpic3 from '../../images/regpic3.png';
import regpic4 from '../../images/regpic4.png';
import regpic5 from '../../images/regpic5.png';
import regpic6 from '../../images/regpic6.png';
import regpic7 from '../../images/regpic7.png';
// import regpic8 from '../../images/regpic8.png';
import regpic9 from '../../images/regpic9.png';
import regpic10 from '../../images/regpic10.png';
import regpic11 from '../../images/regpic5.png';
import regpic12 from '../../images/regpic5.png';
import regpic13 from '../../images/regpic5.png';


const Blog = () => {
  const blogPosts = [
    {
      title: 'Гайд №1: Как развернуть свой сайт на бесплатном облаке GCP',
      content: [
        { type: 'text', text: 'Google Cloud Platform (GCP) предоставляет широкий спектр преимуществ, которые делают его привлекательным выбором для организаций и разработчиков. GCP обеспечивает высокую масштабируемость, позволяя адаптировать ресурсы под изменяющиеся потребности. С глобальным присутствием и центрами обработки данных по всему миру, GCP снижает задержки и обеспечивает высокую производительность для пользователей в разных частях планеты.Мощная экосистема GCP включает в себя разнообразные инструменты и услуги, такие как хранилище данных, вычислительные ресурсы, базы данных, искусственный интеллект, аналитику и многие другие. Это позволяет разработчикам создавать сложные приложения и решения.' },
        { type: 'image', imageUrl: gcppic },
        { type: 'text', text: 'GCP даёт всем бесплатным пользователям 300$ на 3 месяца. Нужно будет подтвердить банковскую карту, но не переживайте, деньги оттуда сниматься не будут' },
        { type: 'text', text: 'Шаг 1. Перейдите на окно регистрации и нажмите "зарегистрировать бесплатный аккаунт"' },
        { type: 'image', imageUrl: regpic1},
        { type: 'text', text: 'После завершения регистрации вы увидите это окно, здесь у нас написана информация о нашем облаке' },
        { type: 'image', imageUrl: regpic3},
        { type: 'text', text: 'Пишем в поиске по облаку "Compute Engine", ' },
        { type: 'image', imageUrl: regpic4},
        { type: 'text', text: 'Google Compute Engine (GCE) — это часть облачной вычислительной инфраструктуры Google Cloud Platform (GCP). Эта служба предоставляет виртуальные машины (VM) высокой производительности, которые можно использовать для развертывания и управления приложениями, хранилищем данных и другими вычислительными задачами в облаке. Compute Engine предоставляет гибкость, масштабируемость и надежность, что делает его подходящим для разнообразных бизнес- и разработческих потребностей. Вы можете выбирать размер и тип виртуальных машин, операционные системы, сетевые параметры и многое другое, чтобы настроить окружение, соответствующее вашим требованиям. Compute Engine также предоставляет автоматизированные опции управления и мониторинга, что упрощает работу с виртуальными машинами в облаке' },
        { type: 'image', imageUrl: regpic5},
        { type: 'text', text: 'Здесь мы можем создавать свои виртуальные машины и управлять ими ' },
        { type: 'image', imageUrl: regpic6},
        { type: 'text', text: 'Нажимаем Create Instance чтобы создать новую виртуальную машину' },
        { type: 'image', imageUrl: regpic7},
        { type: 'text', text: 'Изменяем название у указываем Region: eu-central-2 (Warsaw)' },
        // { type: 'image', imageUrl: regpic8},
        { type: 'text', text: 'В разделе Boot Disk чуть ниже, указываем Ubuntu 22 LTS x86' },
        { type: 'image', imageUrl: regpic9},
        { type: 'text', text: 'Выбираем галочки Allow HTTP/HTTPS это важно для нашего будущего веб-сервера' },
        { type: 'image', imageUrl: regpic9},
        { type: 'text', text: 'Готово! Нажимаем create и ждем пока наша виртуальная машина будет готова. Ее мощности будет достаточно для нашего веб-сервера, осталось лишь только установить всё необходимое.' },




        // { type: 'text', text: '' },


      ],
    },
    // Add more blog posts as needed
  ];

  return (
    <div id="blog">
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          {post.content.map((section, i) => (
            <div key={i} className={`blog-section ${section.type}`}>
              {section.type === 'text' && <p>{section.text}</p>}
              {section.type === 'image' && <img src={section.imageUrl} alt={post.title} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Blog;
