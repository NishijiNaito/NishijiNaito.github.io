import{_ as m,c as d,b as e,i as p,d as s,k as f,w as v,F as h,e as y,v as u,o as _,t as k,f as g}from"./index-CsNUdR-J.js";const $=`let image = [
  arr_images
];


function run() {
  if (!token) {
    ui.notifications.error("ไม่พบ Token ของคุณ");
    return;
  }


  let ous = image.reduce((p, e) => {
    if (e.label != '' & e.url != '') {
      if (token.data.texture.src == e.url) {
        return p += \`<div class="form-group"><input type="radio" id="u_\${e.label}" name="url" value="\${e.url}" checked><label for="u_\${e.label}">\${e.label}</label><br></div>\`;
      } else {
        return p += \`<div class="form-group"><input type="radio" id="u_\${e.label}" name="url" value="\${e.url}"><label for="u_\${e.label}">\${e.label}</label><br></div>\`;
      }


    } else {
      return p;
    }
  }, "");


  const myContent = \`<form class="editable flexcol">\${ous}</form>\`;






  new Dialog({
    title: "เลือกรูปที่ต้องการเปลี่ยน",
    content: myContent,
    buttons: {
      button1: {
        label: "OK",
        callback: (html) => myCallback(html),
        icon: \`<i class="fas fa-check"></i>\`
      }
    }
  }).render(true);


}


async function myCallback(html) {
  const url = html.find("input[name='url']:checked").val();
  token.document.update({ img: url });
}


run();`,C=`let image = [
  arr_images
];


function run() {
  if (!token) {
    ui.notifications.error("ไม่พบ Token ของคุณ");
    return;
  }


  let ous = image.reduce((p, e) => {
    if (e.label != '' & e.url != '') {
      if (token.document.texture.src == e.url) {
        return p += \`<div class="form-group"><input type="radio" id="u_\${e.label}" name="url" value="\${e.url}" checked><label for="u_\${e.label}">\${e.label}</label><br></div>\`;
      } else {
        return p += \`<div class="form-group"><input type="radio" id="u_\${e.label}" name="url" value="\${e.url}"><label for="u_\${e.label}">\${e.label}</label><br></div>\`;
      }


    } else {
      return p;
    }
  }, "");


  const myContent = \`<form class="editable flexcol">\${ous}</form>\`;






  new Dialog({
    title: "เลือกรูปที่ต้องการเปลี่ยน",
    content: myContent,
    buttons: {
      button1: {
        label: "OK",
        callback: (html) => myCallback(html),
        icon: \`<i class="fas fa-check"></i>\`
      }
    }
  }).render(true);


}


async function myCallback(html) {
  const url = html.find("input[name='url']:checked").val();
  token.document.update({ texture: { src: url } });
}


run();`,V="{ label: `i_label`, url: `i_url` },",b={v_11:$,v_12:C,in_array:V},w={data(){return{t:b,pic_list:[{i_label:"",i_url:""}],scriptcode:"",foundry_version:"v_11"}},methods:{addList(){this.pic_list.push({i_label:"",i_url:""})},toCopy(){navigator.clipboard.writeText(this.scriptcode)},generateScript(){let i=this.pic_list.reduce((n,a)=>n+b.in_array.replaceAll("i_label",a.i_label).replaceAll("i_url",a.i_url),"");this.scriptcode=b[this.foundry_version].replaceAll("arr_images",i).replaceAll(`
`,"")}}},T={class:"row justify-content-center g-3"},S={class:"col-lg-5"},x={class:"card"},L={class:"card-header"},U={class:"form-group ms-5"},F=e("option",{value:"v_11"},"Foundry Version 11",-1),A=e("option",{value:"v_12"},"Foundry Version 12",-1),D=[F,A],B={class:"card-actions btn-actions"},I=e("i",{class:"fas fa-plus fa-lg text-success"},null,-1),M=[I],q={class:"card-body"},K={type:"submit",ref:"cssf",hidden:""},N={class:"card-header"},O={class:"card-title"},j={class:"card-actions btn-actions"},E=["onClick"],G=e("i",{class:"fas fa-times fa-lg text-danger"},null,-1),z=[G],H={class:"card-body"},J={class:"form-group"},P=["for"],Q=["id","onUpdate:modelValue"],R=["for"],W=["id","onUpdate:modelValue"],X={class:"col-lg-7"},Y={class:"card"},Z={class:"card-header"},ee={class:"card-actions"},ne={class:"card-body"};function te(i,n,a,le,l,c){return _(),d("div",T,[e("div",S,[e("div",x,[e("div",L,[p(" Token List "),e("div",U,[s(e("select",{id:"my-select",class:"form-select","onUpdate:modelValue":n[0]||(n[0]=t=>l.foundry_version=t)},D,512),[[f,l.foundry_version]])]),e("div",B,[e("button",{onClick:n[1]||(n[1]=t=>c.addList()),class:"btn-action"},M)])]),e("div",q,[e("form",{onSubmit:n[2]||(n[2]=v(t=>c.generateScript(),["prevent"]))},[e("button",K,"submit",512),(_(!0),d(h,null,y(l.pic_list,(t,o)=>(_(),d("div",{class:"card mb-3",key:o},[e("div",N,[e("h3",O,"Token Info "+k(o+1),1),s(e("div",j,[e("button",{onClick:r=>l.pic_list.splice(o,1),class:"btn-action"},z,8,E)],512),[[g,l.pic_list.length>1]])]),e("div",H,[e("div",J,[e("label",{for:"tolip_"+o},"Label",8,P),s(e("input",{type:"text",class:"form-control mb-1",id:"tolip_"+o,"onUpdate:modelValue":r=>t.i_label=r,"aria-describedby":"helpId",placeholder:"Label",required:""},null,8,Q),[[u,t.i_label]]),e("label",{for:"urlip_"+o},"Token Link",8,R),s(e("input",{type:"url",class:"form-control",id:"urlip_"+o,"onUpdate:modelValue":r=>t.i_url=r,"aria-describedby":"helpId",placeholder:"Token Link",required:""},null,8,W),[[u,t.i_url]])])])]))),128))],32)])])]),e("div",X,[e("div",Y,[e("div",Z,[p(" Foundry Script "),e("div",ee,[e("button",{onClick:n[3]||(n[3]=t=>c.toCopy()),class:"btn btn-info me-2"},"Copy"),e("button",{onClick:n[4]||(n[4]=t=>i.$refs.cssf.click()),class:"btn btn-primary"}," Generate Script ")])]),e("div",ne,[s(e("textarea",{class:"form-control",rows:"15","onUpdate:modelValue":n[5]||(n[5]=t=>l.scriptcode=t),readonly:""},`\r
          `,512),[[u,l.scriptcode]])])])])])}const se=m(w,[["render",te]]);export{se as default};
