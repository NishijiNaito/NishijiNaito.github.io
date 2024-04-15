import{_ as m,c as i,b as a,i as u,w as g,F as h,e as b,d as o,v as d,o as s,t as f,f as k,k as y,l as p}from"./index-BoRljiQK.js";const x=`html {
  --body_vertical_align: bottom;
  --body_vertical_align: middle;
  --body_vertical_align: top;
  --body_horizontal_align: right;
  --body_horizontal_align: center;
  --body_horizontal_align: left;


  --voice_states_margin_top: 6px;
  --voice_states_margin_bottom: 6px;
  --voice_states_margin_bottom_including_voice_state_margin_bottom: calc(var(--voice_states_margin_bottom) - var(--voice_state_margin_bottom_adjusted));
  --voice_states_margin_left: 6px;
  --voice_states_margin_right: 6px;


  --voice_state_margin_bottom: 6px;
  --voice_state_margin_right: 6px;
  --voice_state_display: inline-block;


  --avatar_height: 128px;
  --avatar_width: 128px;
  --avatar_border_width: 6px;
  --avatar_border_style: solid;
  --avatar_border_colour: transparent;
  --avatar_border_radius: 12px;
  --avatar_float_side: left;
  --avatar_transition_property: top;
  --avatar_transition_delay: 0s;
  --avatar_transition_duration: 0.25s;
  --avatar_transition_function: ease-in-out;
  --avatar_filter: brightness(60%);


  --speaking_avatar_border_colour: #43b581;
  --speaking_avatar_filter: brightness(100%);


  --user_float_side: left;


  --username_font_color: rgb(255, 255, 255);
  --username_font_size: 22px;
  --username_background_colour: rgba(30, 33, 36, 0.80);
  --username_font_family: Whitney;
  --username_font_weight: 600;
  --username_font_line_height: 0.75;
  --username_width: 128px;
  --username_max_width: 128px;
  --username_text_overflow_style: ellipsis;
  --username_text_align: center;
  --username_border_width: 0px;
  --username_border_radius: 6px;
  --username_top_left_border_radius: 0;
  --username_top_right_border_radius: 0;
  --username_float_side: left;
  --username_margin_top: calc(var(--avatar_height_including_border) - var(--username_height) - 6px);
  --username_margin_left: calc((-1 * var(--username_max_width, 0)) - (var(--avatar_width_including_border) + (-1 * var(--username_max_width, 0))) / 2);


  --speaking_username_background_colour: rgba(30, 33, 36, 0.80);


  /*     recommended not to change */
  display: block;


  height: 100%;
  width: 100%;
  margin: auto;
  display: table;
  --body_display: table-cell;
  --body_overflow: hidden;
  --voice_states_margin_bottom_including_voice_state_margin_bottom_adjusted: calc(var(--voice_states_margin_bottom_including_voice_state_margin_bottom) - 4px);
  --voice_states_margin_right_including_voice_state_margin_right: calc(var(--voice_states_margin_right) - var(--voice_state_margin_right));
  --voice_states_padding_left: 0px;
  --voice_state_margin_bottom_adjusted: calc(var(--voice_state_margin_bottom) - 4px);
  --voice_state_white_space: nowrap;
  --avatar_height_including_border: calc(var(--avatar_height, 128px) + var(--avatar_border_width, 0px) * 2);
  --avatar_width_including_border: calc(var(--avatar_width) + var(--avatar_border_width) * 2);
  --avatar_start_top: calc(var(--avatar_transition_start_top, 0px) - var(--avatar_transition_start_bottom, 0px));
  --avatar_start_right: calc(var(--avatar_transition_start_right, 0px) - var(--avatar_transition_start_left, 0px));
  --avatar_end_top: calc(var(--avatar_transition_end_top, 0px) - var(--avatar_transition_end_bottom, 0px));
  --avatar_end_right: calc(var(--avatar_transition_end_right, 0px) - var(--avatar_transition_end_left, 0px));
  --avatar_margin_right: 0px;
  --avatar_position: relative;
  --avatar_z_index: -1;
  --user_padding_top: 0px;
  --user_display: inline-block;
  --username_overflow: hidden;
  --username_height: calc(var(--username_font_line_height) * var(--username_font_size) + 8px);
}




body {
  margin: 0;


  vertical-align: var(--body_vertical_align, baseline);
  text-align: var(--body_horizontal_align, left);


  /*     recommended not to change */
  display: var(--body_display, block);
  overflow: var(--body_overflow, visible);
}




/* .voice-container .voice-states { */
ul[class^="Voice_voiceStates"] {
  list-style-type: none;
  padding-left: 15px;


  margin-top: var(--voice_states_margin_top, 16px);
  margin-bottom: var(--voice_states_margin_bottom_including_voice_state_margin_bottom_adjusted, 16px);


  margin-left: var(--voice_states_margin_left, 0);
  margin-right: var(--voice_states_margin_right_including_voice_state_margin_right, 0);


  /*     recommended not to change */
  padding-left: var(--voice_states_padding_left, 15px);
}




/* .voice-container .voice-states .voice-state { */
li[class^="Voice_voiceState"] {
  height: 50px;
  margin-bottom: 8px;


  height: var(--avatar_height_including_border, 50px);
  margin-bottom: var(--voice_state_margin_bottom_adjusted, 8px);


  margin-right: var(--voice_state_margin_right, 0);
  display: var(--voice_state_display, block);


  /*     recommended not to change */
  white-space: var(--voice_state_white_space, normal);
}




/* .voice-container .voice-states .voice-state .avatar { */
img[class^="Voice_avatar"] {
  height: 50px;
  width: 50px;
  border: 3px solid transparent;
  border-radius: 50%;
  float: left;
  margin-right: 8px;


  height: var(--avatar_height, 50px);
  width: var(--avatar_width, 50px);
  border-width: var(--avatar_border_width, 3px);
  border-style: var(--avatar_border_style, solid);
  border-color: var(--avatar_border_colour, transparent);
  border-radius: var(--avatar_border_radius, 50%);
  border-top-left-radius: var(--avatar_top_left_border_radius, var(--avatar_border_radius));
  border-top-right-radius: var(--avatar_top_right_border_radius, var(--avatar_border_radius));
  border-bottom-left-radius: var(--avatar_bottom_left_border_radius, var(--avatar_border_radius));
  border-bottom-right-radius: var(--avatar_bottom_right_border_radius, var(--avatar_border_radius));
  float: var(--avatar_float_side, left);


  top: var(--avatar_start_top, auto);
  right: var(--avatar_start_right, auto);
  transition-property: var(--avatar_transition_property, all);
  transition-delay: var(--avatar_transition_delay, 0s);
  transition-duration: var(--avatar_transition_duration, 0s);
  transition-timing-function: var(--avatar_transition_function, ease);
  filter: var(--avatar_filter, none);


  /*     recommended not to change */
  margin-right: var(--avatar_margin_right, 8px);


  position: var(--avatar_position, static);
  z-index: var(--avatar_z_index, auto);
}




/* .voice-container .voice-states .voice-state .avatar.speaking { */
img[class*="avatarSpeaking"] {
  border-color: #43b581;


  border-color: var(--speaking_avatar_border_colour, #43b581);


  top: var(--avatar_end_top, auto);
  right: var(--avatar_end_right, auto);
  filter: var(--speaking_avatar_filter, none);
}




/* .voice-container .voice-states .voice-state .user { */
div[class^="Voice_user"] {
  padding-top: 18px;


  float: var(--user_float_side, none);


  /*     recommended not to change */
  padding-top: var(--user_padding_top, 18px);
  display: var(--user_display, block);
}




/* .voice-container .voice-states .voice-state .user .name { */
span[class^="Voice_name"] {
  color: #ffffff;
  font-size: 14px;
  background-color: rgba(30, 33, 36, 0.95);


  color: var(--username_font_color) !important;
  font-size: var(--username_font_size, 14px) !important;
  background-color: var(--username_background_colour, rgba(30, 33, 36, 0.95)) !important;
  font-family: var(--username_font_family, Whitney);
  font-weight: var(--username_font_weight, 600);
  line-height: var(--username_font_line_height, 19px);


  width: calc(var(--username_width, auto) - 12px);
  max-width: calc(var(--username_max_width, none) - 12px);
  text-overflow: var(--username_text_overflow_style, clip);
  text-align: var(--username_text_align, left);
  border-width: var(--username_border_width, medium);
  border-style: var(--username_border_style, none);
  border-color: var(--username_border_colour, transparent);
  border-radius: var(--username_border_radius, 0);
  border-top-left-radius: var(--username_top_left_border_radius, var(--username_border_radius));
  border-top-right-radius: var(--username_top_right_border_radius, var(--username_border_radius));
  border-bottom-left-radius: var(--username_bottom_left_border_radius, var(--username_border_radius));
  border-bottom-right-radius: var(--username_bottom_right_border_radius, var(--username_border_radius));
  float: var(--username_float_side, none);
  margin-top: var(--username_margin_top, 0);
  margin-left: var(--username_margin_left, 0);
  margin-right: var(--username_margin_right, 0);


  /*     recommended not to change */
  overflow: var(--username_overflow, visible);
}




/* .voice-container .voice-states .voice-state .avatar.speaking + .user .name { */
img[class*="avatarSpeaking"]~div[class^="Voice_user"]>span[class^="Voice_name"] {
  background-color: var(--speaking_username_background_colour, rgba(30, 33, 36, 0.95)) !important;
}


li[class^="Voice_voiceState"]>div>span {
  visibility: hidden;
}



li[class^="Voice_voiceState"] {
  display: none;
}



`,w=`ul>li[class^="Voice_voiceState"][data-userid*="disuserid"] {
  display: var(--voice_state_display, block);
}


img[class^="Voice_avatar"][src*="disuserid"] {
  object-fit: cover;
  object-position: 100% 0;
  content: url('picturelink');
}



`,S=`img[class*="avatarSpeaking"][src*="disuserid"] {
  object-fit: cover;
  object-position: 100% 0;
  content: url('picturespeaklink');
}

`,c={first:x,forplayer:w,forhavespeak:S},V={data(){return{t:c,dc_list:[{disuserid:"",picturelink:"",haveSpeakPic:!1,picturespeaklink:""}],csscode:""}},methods:{addList(){this.dc_list.push({disuserid:"",picturelink:"",haveSpeakPic:!1,picturespeaklink:""})},generateCss(){this.csscode=c.first+this.dc_list.reduce((l,e)=>l+c.forplayer.replaceAll("disuserid",e.disuserid).replaceAll("picturelink",e.picturelink)+(e.haveSpeakPic?c.forhavespeak.replaceAll("disuserid",e.disuserid).replaceAll("picturespeaklink",e.picturespeaklink):""),"")},toCopy(){navigator.clipboard.writeText(this.csscode)}}},C={class:"row justify-content-center g-3"},P={class:"col-lg-5"},z={class:"card"},j={class:"card-header"},U={class:"card-actions btn-actions"},D=a("i",{class:"fas fa-plus fa-lg text-success"},null,-1),L=[D],I={class:"card-body"},A={type:"submit",ref:"cssf",hidden:""},q={class:"card-header"},B={class:"card-title"},F={class:"card-actions btn-actions"},M=["onClick"],N=a("i",{class:"fas fa-times fa-lg text-danger"},null,-1),T=[N],W={class:"card-body"},$={class:"form-group"},E=["for"],G=["id","onUpdate:modelValue"],H=["for"],O=["id","onUpdate:modelValue"],J={class:"form-check form-check-inline mt-2"},K=["onUpdate:modelValue"],Q=a("span",{class:"form-check-label"},"Have Speak State Pic ?",-1),R={key:0},X=["for"],Y=["id","onUpdate:modelValue"],Z={class:"col-lg-7"},aa={class:"card"},ta={class:"card-header"},ea={class:"card-actions"},na={class:"card-body"};function ra(l,e,ia,oa,_,v){return s(),i("div",C,[a("div",P,[a("div",z,[a("div",j,[u(" List "),a("div",U,[a("button",{onClick:e[0]||(e[0]=t=>v.addList()),class:"btn-action"},L)])]),a("div",I,[a("form",{onSubmit:e[1]||(e[1]=g(t=>v.generateCss(),["prevent"]))},[a("button",A,"submit",512),(s(!0),i(h,null,b(_.dc_list,(t,n)=>(s(),i("div",{class:"card mb-3",key:n},[a("div",q,[a("h3",B,"Discord Info "+f(n+1),1),o(a("div",F,[a("button",{onClick:r=>_.dc_list.splice(n,1),class:"btn-action"},T,8,M)],512),[[k,_.dc_list.length>1]])]),a("div",W,[a("div",$,[a("label",{for:"dcip_"+n},"Discord ID",8,E),o(a("input",{type:"text",class:"form-control mb-1",id:"dcip_"+n,"onUpdate:modelValue":r=>t.disuserid=r,"aria-describedby":"helpId",placeholder:"Discord ID",required:""},null,8,G),[[d,t.disuserid]]),a("label",{for:"plip_"+n},"Picture Link",8,H),o(a("input",{type:"url",class:"form-control",id:"plip_"+n,"onUpdate:modelValue":r=>t.picturelink=r,"aria-describedby":"helpId",placeholder:"Picture Link",required:""},null,8,O),[[d,t.picturelink]]),a("label",J,[o(a("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":r=>t.haveSpeakPic=r},null,8,K),[[y,t.haveSpeakPic]]),Q]),t.haveSpeakPic?(s(),i("br",R)):p("",!0),t.haveSpeakPic?(s(),i("label",{key:1,for:"plsip_"+n},"Picture Speak Link",8,X)):p("",!0),t.haveSpeakPic?o((s(),i("input",{key:2,type:"url",class:"form-control",id:"plsip_"+n,"onUpdate:modelValue":r=>t.picturespeaklink=r,"aria-describedby":"helpId",placeholder:"Picture Speak Link",required:""},null,8,Y)),[[d,t.picturespeaklink]]):p("",!0)])])]))),128))],32)])])]),a("div",Z,[a("div",aa,[a("div",ta,[u(" CSS File "),a("div",ea,[a("button",{onClick:e[2]||(e[2]=t=>v.toCopy()),class:"btn btn-info me-2"},"Copy"),a("button",{onClick:e[3]||(e[3]=t=>l.$refs.cssf.click()),class:"btn btn-primary"}," Generate CSS ")])]),a("div",na,[o(a("textarea",{class:"form-control",rows:"15","onUpdate:modelValue":e[4]||(e[4]=t=>_.csscode=t),readonly:""},`\r
          `,512),[[d,_.csscode]])])])])])}const _a=m(V,[["render",ra]]);export{_a as default};
