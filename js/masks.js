\
/* js/masks.js - máscaras simples sem dependências */
(function(){
  function onlyDigits(value){ return value.replace(/\D/g,''); }

  function maskCPF(v){
    v = onlyDigits(v).slice(0,11);
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    return v;
  }
  function maskPhone(v){
    v = onlyDigits(v).slice(0,11);
    if(v.length <= 10){
      v = v.replace(/(\d{2})(\d)/,'($1) $2');
      v = v.replace(/(\d{4})(\d)/,'$1-$2');
    } else {
      v = v.replace(/(\d{2})(\d)/,'($1) $2');
      v = v.replace(/(\d{5})(\d)/,'$1-$2');
    }
    return v;
  }
  function maskCEP(v){
    v = onlyDigits(v).slice(0,8);
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
  }

  document.addEventListener('DOMContentLoaded', function(){
    var cpf = document.getElementById('cpf');
    var tel = document.getElementById('telefone');
    var cep = document.getElementById('cep');
    function set(el, fn){
      if(!el) return;
      el.addEventListener('input', function(){ this.value = fn(this.value); });
    }
    set(cpf, maskCPF);
    set(tel, maskPhone);
    set(cep, maskCEP);
  });
})();