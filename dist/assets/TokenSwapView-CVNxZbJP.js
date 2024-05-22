import{_ as m,c as d,b as e,i as b,w as f,F as h,e as v,d as i,v as u,o as _,t as y,f as k}from"./index-CUam1Evl.js";const g=`let image = [
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


run();`,C="{ label: `i_label`, url: `i_url` },",p={main:g,in_array:C},$={data(){return{t:p,pic_list:[{i_label:"",i_url:""}],scriptcode:""}},methods:{addList(){this.pic_list.push({i_label:"",i_url:""})},toCopy(){navigator.clipboard.writeText(this.scriptcode)},generateScript(){let a=this.pic_list.reduce((t,r)=>t+p.in_array.replaceAll("i_label",r.i_label).replaceAll("i_url",r.i_url),"");this.scriptcode=p.main.replaceAll("arr_images",a).replaceAll(`
`,"")}}},w={class:"row justify-content-center g-3"},T={class:"col-lg-5"},L={class:"card"},S={class:"card-header"},V={class:"card-actions btn-actions"},x=e("i",{class:"fas fa-plus fa-lg text-success"},null,-1),U=[x],A={class:"card-body"},B={type:"submit",ref:"cssf",hidden:""},D={class:"card-header"},F={class:"card-title"},I={class:"card-actions btn-actions"},q=["onClick"],M=e("i",{class:"fas fa-times fa-lg text-danger"},null,-1),N=[M],j={class:"card-body"},E={class:"form-group"},G=["for"],K=["id","onUpdate:modelValue"],O=["for"],z=["id","onUpdate:modelValue"],H={class:"col-lg-7"},J={class:"card"},P={class:"card-header"},Q={class:"card-actions"},R={class:"card-body"};function W(a,t,r,X,l,c){return _(),d("div",w,[e("div",T,[e("div",L,[e("div",S,[b(" Token List "),e("div",V,[e("button",{onClick:t[0]||(t[0]=n=>c.addList()),class:"btn-action"},U)])]),e("div",A,[e("form",{onSubmit:t[1]||(t[1]=f(n=>c.generateScript(),["prevent"]))},[e("button",B,"submit",512),(_(!0),d(h,null,v(l.pic_list,(n,s)=>(_(),d("div",{class:"card mb-3",key:s},[e("div",D,[e("h3",F,"Token Info "+y(s+1),1),i(e("div",I,[e("button",{onClick:o=>l.pic_list.splice(s,1),class:"btn-action"},N,8,q)],512),[[k,l.pic_list.length>1]])]),e("div",j,[e("div",E,[e("label",{for:"tolip_"+s},"Label",8,G),i(e("input",{type:"text",class:"form-control mb-1",id:"tolip_"+s,"onUpdate:modelValue":o=>n.i_label=o,"aria-describedby":"helpId",placeholder:"Label",required:""},null,8,K),[[u,n.i_label]]),e("label",{for:"urlip_"+s},"Token Link",8,O),i(e("input",{type:"url",class:"form-control",id:"urlip_"+s,"onUpdate:modelValue":o=>n.i_url=o,"aria-describedby":"helpId",placeholder:"Token Link",required:""},null,8,z),[[u,n.i_url]])])])]))),128))],32)])])]),e("div",H,[e("div",J,[e("div",P,[b(" Foundry Script "),e("div",Q,[e("button",{onClick:t[2]||(t[2]=n=>c.toCopy()),class:"btn btn-info me-2"},"Copy"),e("button",{onClick:t[3]||(t[3]=n=>a.$refs.cssf.click()),class:"btn btn-primary"}," Generate Script ")])]),e("div",R,[i(e("textarea",{class:"form-control",rows:"15","onUpdate:modelValue":t[4]||(t[4]=n=>l.scriptcode=n),readonly:""},`\r
          `,512),[[u,l.scriptcode]])])])])])}const Z=m($,[["render",W]]);export{Z as default};
