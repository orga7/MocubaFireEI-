(function(){
  'use strict';
  // Mobile menu toggle
  var hamb=document.getElementById('hamb');
  var menu=document.getElementById('menu');
  if(hamb&&menu){
    hamb.addEventListener('click',function(){
      menu.classList.toggle('open');
      hamb.classList.toggle('active');
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        menu.classList.remove('open');
        hamb.classList.remove('active');
      });
    });
  }

  // Navbar shadow on scroll
  var nav=document.getElementById('nav');
  window.addEventListener('scroll',function(){
    if(nav){ nav.classList.toggle('scrolled', window.scrollY>10); }
  });

  // Reveal on scroll
  var reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  // Quote form -> WhatsApp
  var form=document.getElementById('quoteForm');
  if(form){
    form.addEventListener('submit',function(ev){
      ev.preventDefault();
      var v=function(id){ var el=document.getElementById(id); return el?el.value.trim():''; };
      var nome=v('nome'), empresa=v('empresa'), telefone=v('telefone'), email=v('email'), servico=v('servico'), mensagem=v('mensagem');
      var lines=['*Novo pedido – Mocuba Fire E.I.*'];
      lines.push('Nome: '+nome);
      if(empresa) lines.push('Empresa: '+empresa);
      lines.push('Telefone: '+telefone);
      if(email) lines.push('E-mail: '+email);
      if(servico) lines.push('Serviço pretendido: '+servico);
      if(mensagem) lines.push('Mensagem: '+mensagem);
      var text=encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/258866543450?text='+text,'_blank');
    });
  }

  // Current year (footer already static 2026, keep in sync if needed)
})();
