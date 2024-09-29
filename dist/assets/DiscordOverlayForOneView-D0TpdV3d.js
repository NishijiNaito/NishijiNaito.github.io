import{_ as v,c as _,b as a,w as p,d as r,v as i,l as u,m as l,i as m,o as d}from"./index-CsNUdR-J.js";const h=`html {
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




  --avatar_height: #disHeight#px;
  --avatar_width: #disWidth#px;
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
  /* border-color: #43b581;




  border-color: var(--speaking_avatar_border_colour, #43b581); */




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
}`,g=`ul>li[class^="Voice_voiceState"][data-userid*="disuserid"] {
  display: var(--voice_state_display, block);
}


img[class^="Voice_avatar"][src*="disuserid"] {
  object-fit: cover;
  object-position: 100% 0;
  content: url('picturelink');
}



`,b=`img[class*="avatarSpeaking"][src*="disuserid"] {
  object-fit: cover;
  object-position: 100% 0;
  content: url('picturespeaklink');
}

`,o={first:h,forplayer:g,forhavespeak:b},f={data(){return{t:o,dc_detail:{disuserid:"",picturelink:"",haveSpeakPic:!1,picturespeaklink:"",width:50,height:50},csscode:""}},methods:{generateCss(){this.csscode=o.first.replaceAll("#disHeight#",this.dc_detail.height).replaceAll("#disWidth#",this.dc_detail.width)+o.forplayer.replaceAll("disuserid",this.dc_detail.disuserid).replaceAll("picturelink",this.dc_detail.picturelink)+(this.dc_detail.haveSpeakPic?o.forhavespeak.replaceAll("disuserid",this.dc_detail.disuserid).replaceAll("picturespeaklink",this.dc_detail.picturespeaklink):""),this.dc_list.reduce((s,e)=>s+o.forplayer.replaceAll("disuserid",e.disuserid).replaceAll("picturelink",e.picturelink)+(e.haveSpeakPic?o.forhavespeak.replaceAll("disuserid",e.disuserid).replaceAll("picturespeaklink",e.picturespeaklink):""),"")},toCopy(){navigator.clipboard.writeText(this.csscode)}}},k={class:"row justify-content-center g-3"},x={class:"col-lg-5"},y={class:"card"},w=a("div",{class:"card-header"}," List ",-1),S={class:"card-body"},V={type:"submit",ref:"cssf",hidden:""},P={class:"card mb-3"},z=a("div",{class:"card-header"},[a("h3",{class:"card-title"},"Discord Info")],-1),C={class:"card-body"},j={class:"form-group"},A=a("label",{for:"dcip_1"},"Discord ID",-1),I=a("label",{for:"plip_1"},"Picture Link",-1),D={class:"form-check form-check-inline mt-2"},U=a("span",{class:"form-check-label"},"Have Speak State Pic ?",-1),q={key:0},L=["for"],W=a("br",null,null,-1),B={class:"row"},H={class:"col-lg-6"},M=a("label",{for:"plwidth"},"width",-1),N={class:"col-lg-6"},T=a("label",{for:"plheight"},"height",-1),F={class:"col-lg-7"},O={class:"card"},E={class:"card-header"},G={class:"card-actions"},J={class:"card-body"};function K(s,e,Q,R,n,c){return d(),_("div",k,[a("div",x,[a("div",y,[w,a("div",S,[a("form",{onSubmit:e[6]||(e[6]=p(t=>c.generateCss(),["prevent"]))},[a("button",V,"submit",512),a("div",P,[z,a("div",C,[a("div",j,[A,r(a("input",{type:"text",class:"form-control mb-1",id:"dcip_1","onUpdate:modelValue":e[0]||(e[0]=t=>n.dc_detail.disuserid=t),"aria-describedby":"helpId",placeholder:"Discord ID",required:""},null,512),[[i,n.dc_detail.disuserid]]),I,r(a("input",{type:"url",class:"form-control",id:"plip_1","onUpdate:modelValue":e[1]||(e[1]=t=>n.dc_detail.picturelink=t),"aria-describedby":"helpId",placeholder:"Picture Link",required:""},null,512),[[i,n.dc_detail.picturelink]]),a("label",D,[r(a("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=t=>n.dc_detail.haveSpeakPic=t)},null,512),[[u,n.dc_detail.haveSpeakPic]]),U]),n.dc_detail.haveSpeakPic?(d(),_("br",q)):l("",!0),n.dc_detail.haveSpeakPic?(d(),_("label",{key:1,for:"plsip_"+s.idx},"Picture Speak Link",8,L)):l("",!0),n.dc_detail.haveSpeakPic?r((d(),_("input",{key:2,type:"url",class:"form-control",id:"plsip_1","onUpdate:modelValue":e[3]||(e[3]=t=>n.dc_detail.picturespeaklink=t),"aria-describedby":"helpId",placeholder:"Picture Speak Link",required:""},null,512)),[[i,n.dc_detail.picturespeaklink]]):l("",!0),W,a("div",B,[a("div",H,[M,r(a("input",{type:"number",class:"form-control",id:"plwidth","onUpdate:modelValue":e[4]||(e[4]=t=>n.dc_detail.width=t),"aria-describedby":"helpId",placeholder:"width",required:""},null,512),[[i,n.dc_detail.width]])]),a("div",N,[T,r(a("input",{type:"number",class:"form-control",id:"plheight","onUpdate:modelValue":e[5]||(e[5]=t=>n.dc_detail.height=t),"aria-describedby":"helpId",placeholder:"height",required:""},null,512),[[i,n.dc_detail.height]])])])])])])],32)])])]),a("div",F,[a("div",O,[a("div",E,[m(" CSS File "),a("div",G,[a("button",{onClick:e[7]||(e[7]=t=>c.toCopy()),class:"btn btn-info me-2"},"Copy"),a("button",{onClick:e[8]||(e[8]=t=>s.$refs.cssf.click()),class:"btn btn-primary"}," Generate CSS ")])]),a("div",J,[r(a("textarea",{class:"form-control",rows:"15","onUpdate:modelValue":e[9]||(e[9]=t=>n.csscode=t),readonly:""},`\r
          `,512),[[i,n.csscode]])])])])])}const Y=v(f,[["render",K]]);export{Y as default};
