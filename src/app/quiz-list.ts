import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generalKnowledge } from "../assets/files/general-knowledge";
import { generalKnowledgeCH } from "../assets/files/general-knowledge-ch";
import { en041422 } from "../assets/files/04-14-22-en.js";
import { cn041422 } from "../assets/files/04-14-22-cn.js"
import {en041722} from "../assets/files/en041722.js"
import {cn041722} from "../assets/files/cn041722.js"
import {en041822} from "../assets/files/en041822.js"
import {cn041822} from "../assets/files/cn041822.js"
import {en042122} from "../assets/files/en042122.js"
import {cn042122} from "../assets/files/cn042122.js"
import {en050122} from "../assets/files/en050122.js"
import {cn050122} from "../assets/files/cn050122.js"
import {en050722} from "../assets/files/en050722.js"
import {cn050722} from "../assets/files/cn050722.js"
import {en051222} from "../assets/files/en051222.js"
import {cn051222} from "../assets/files/cn051222.js"
import {en052022} from "../assets/files/en052022.js"
import {cn052022} from "../assets/files/cn052022.js"
import {en052522} from "../assets/files/en052522.js"
import {cn052522} from "../assets/files/cn052522.js"
import {en060622} from "../assets/files/en060622.js"
import {cn060622} from "../assets/files/cn060622.js"
import {en061522} from "../assets/files/en061522.js"
import {cn061522} from "../assets/files/cn061522.js"
import {en061622} from "../assets/files/en061622.js"
import {cn061622} from "../assets/files/cn061622.js"
import {en062122} from "../assets/files/en062122.js"
import {cn062122} from "../assets/files/cn062122.js"
import {en062222} from "../assets/files/en062222.js"
import {cn062222} from "../assets/files/cn062222.js"
import {en070122} from "../assets/files/en070122.js"
import {cn070122} from "../assets/files/cn070122.js"
import {en070422} from "../assets/files/en070422.js"
import {cn070422} from "../assets/files/cn070422.js"
import {en070622} from "../assets/files/en070622.js"
import {cn070622} from "../assets/files/cn070622.js"
import {en071122} from "../assets/files/en071122.js"
import {cn071122} from "../assets/files/cn071122.js"
import {en071622} from "../assets/files/en071622.js"
import {cn071622} from "../assets/files/cn071622.js"
import {en073122} from "../assets/files/en073122.js"
import {cn073122} from "../assets/files/cn073122.js"
import {en080522} from "../assets/files/en080522.js"
import {cn080522} from "../assets/files/cn080522.js"
import {en080922} from "../assets/files/en080922.js"
import {cn080922} from "../assets/files/cn080922.js"
import {en082422} from "../assets/files/en082422.js"
import {cn082422} from "../assets/files/cn082422.js"
import {en083022} from "../assets/files/en083022.js"
import {cn083022} from "../assets/files/cn083022.js"
import {en090722} from "../assets/files/en090722.js"
import {cn090722} from "../assets/files/cn090722.js"
import {en091222} from "../assets/files/en091222.js"
import {cn091222} from "../assets/files/cn091222.js"
import {en091322} from "../assets/files/en091322.js"
import {cn091322} from "../assets/files/cn091322.js"
import {en092622} from "../assets/files/en092622.js"
import {cn092622} from "../assets/files/cn092622.js"
import {en100322} from "../assets/files/en100322.js"
import {cn100322} from "../assets/files/cn100322.js"
import {en100522} from "../assets/files/en100522.js"
import {cn100522} from "../assets/files/cn100522.js"
import {en100922} from "../assets/files/en100922.js"
import {cn100922} from "../assets/files/cn100922.js"
import {en100722} from "../assets/files/en100722.js"
import {cn100722} from "../assets/files/cn100722.js"
import {en100622} from "../assets/files/en100622.js"
import {cn100622} from "../assets/files/cn100622.js"
import {en101122} from "../assets/files/en101122.js"
import {cn101122} from "../assets/files/cn101122.js"
import {en101322} from "../assets/files/en101322.js"
import {cn101322} from "../assets/files/cn101322.js"
import {en101222} from "../assets/files/en101222.js"
import {cn101222} from "../assets/files/cn101222.js"
import {en101422} from "../assets/files/en101422.js"
import {cn101422} from "../assets/files/cn101422.js"
import {en101922} from "../assets/files/en101922.js"
import {cn101922} from "../assets/files/cn101922.js"
import {end101922} from "../assets/files/end101922.js"
import {cnd101922} from "../assets/files/cnd101922.js"
import {end101422} from "../assets/files/end101422.js"
import {cnd101422} from "../assets/files/cnd101422.js"
import {enf101422} from "../assets/files/enf101422.js"
import {cnf101422} from "../assets/files/cnf101422.js"
import {en102022} from "../assets/files/en102022.js"
import {cn102022} from "../assets/files/cn102022.js"
import {en072022} from "../assets/files/en072022.js"
import {cn072022} from "../assets/files/cn072022.js"
import {end102022} from "../assets/files/end102022.js"
import {cnd102022} from "../assets/files/cnd102022.js"
import {en102322} from "../assets/files/en102322.js"
import {cn102322} from "../assets/files/cn102322.js"
import {en102422} from "../assets/files/en102422.js"
import {cn102422} from "../assets/files/cn102422.js"
import {en102522} from "../assets/files/en102522.js"
import {cn102522} from "../assets/files/cn102522.js"
import {en102622} from "../assets/files/en102622.js"
import {cn102622} from "../assets/files/cn102622.js"
import {end102622} from "../assets/files/end102622.js"
import {cnd102622} from "../assets/files/cnd102622.js"
import {en103122} from "../assets/files/en103122.js"
import {cn103122} from "../assets/files/cn103122.js"
import {end103122} from "../assets/files/end103122.js"
import {cnd103122} from "../assets/files/cnd103122.js"
import {en110122} from "../assets/files/en110122.js"
import {cn110122} from "../assets/files/cn110122.js"
import {end110122} from "../assets/files/end110122.js"
import {cnd110122} from "../assets/files/cnd110122.js"
import {en110222} from "../assets/files/en110222.js"
import {cn110222} from "../assets/files/cn110222.js"
import {end110222} from "../assets/files/end110222.js"
import {cnd110222} from "../assets/files/cnd110222.js"
import {ena260} from "../assets/files/ena260.js"
import {cna260} from "../assets/files/cna260.js"
import {enb260} from "../assets/files/enb260.js"
import {cnb260} from "../assets/files/cnb260.js"
import {enc260} from "../assets/files/enc260.js"
import {cnc260} from "../assets/files/cnc260.js"
import {end260} from "../assets/files/end260.js"
import {cnd260} from "../assets/files/cnd260.js"
import {ene260} from "../assets/files/ene260.js"
import {cne260} from "../assets/files/cne260.js"
import {ena300} from "../assets/files/ena300.js"
import {cna300} from "../assets/files/cna300.js"
import {enb300} from "../assets/files/enb300.js"
import {cnb300} from "../assets/files/cnb300.js"
import {enc300} from "../assets/files/enc300.js"
import {cnc300} from "../assets/files/cnc300.js"
import {end300} from "../assets/files/end300.js"
import {cnd300} from "../assets/files/cnd300.js"
import {ene300} from "../assets/files/ene300.js"
import {cne300} from "../assets/files/cne300.js"
import {enf300} from "../assets/files/enf300.js"
import {cnf300} from "../assets/files/cnf300.js"
import {ena95} from "../assets/files/ena95.js"
import {cna95} from "../assets/files/cna95.js"
import {enb95} from "../assets/files/enb95.js"
import {cnb95} from "../assets/files/cnb95.js"
import {ena240} from "../assets/files/ena240.js"
import {cna240} from "../assets/files/cna240.js"
import {enb240} from "../assets/files/enb240.js"
import {cnb240} from "../assets/files/cnb240.js"
import {enc240} from "../assets/files/enc240.js"
import {cnc240} from "../assets/files/cnc240.js"
import {end240} from "../assets/files/end240.js"
import {cnd240} from "../assets/files/cnd240.js"
import {ene240} from "../assets/files/ene240.js"
import {cne240} from "../assets/files/cne240.js"
import {ena117} from "../assets/files/ena117.js"
import {cna117} from "../assets/files/cna117.js"
import {enb117} from "../assets/files/enb117.js"
import {cnb117} from "../assets/files/cnb117.js"
import {enc117} from "../assets/files/enc117.js"
import {cnc117} from "../assets/files/cnc117.js"
import {end117} from "../assets/files/end117.js"
import {cnd117} from "../assets/files/cnd117.js"

export const quizList = {
  generalKnowledge:generalKnowledge,
  generalKnowledgeCH:generalKnowledgeCH,
  en041422:en041422,
  cn041422:cn041422,
  en041722:en041722,
  cn041722:cn041722,
  en041822:en041822,
  cn041822:cn041822,
  en042122:en042122,
  cn042122:cn042122,
  en050122:en050122,
  cn050122:cn050122,
  en050722:en050722,
  cn050722:cn050722,
  en051222:en051222,
  cn051222:cn051222,
  en052022:en052022,
  cn052022:cn052022,
  en052522:en052522,
  cn052522:cn052522,
  en060622:en060622,
  cn060622:cn060622,
  en061522:en061522,
  cn061522:cn061522,
  en061622:en061622,
  cn061622:cn061622,
  en062122:en062122,
  cn062122:cn062122,
  en062222:en062222,
  cn062222:cn062222,
  en070122:en070122,
  cn070122:cn070122,
  en070422:en070422,
  cn070422:cn070422,
  en070622:en070622,
  cn070622:cn070622,
  en071122:en071122,
  cn071122:cn071122,
  en071622:en071622,
  cn071622:cn071622,
  en073122:en073122,
  cn073122:cn073122,
  en080522:en080522,
  cn080522:cn080522,
  en080922:en080922,
  cn080922:cn080922,
  en082422:en082422,
  cn082422:cn082422,
  en083022:en083022,
  cn083022:cn083022,
  en090722:en090722,
  cn090722:cn090722,
  en091222:en091222,
  cn091222:cn091222,
  en091322:en091322,
  cn091322:cn091322,
  en092622:en092622,
  cn092622:cn092622,
  en100322:en100322,
  cn100322:cn100322,
  en100522:en100522,
  cn100522:cn100522,
  en100922:en100922,
  cn100922:cn100922,
  en100722:en100722,
  cn100722:cn100722,
  en100622:en100622,
  cn100622:cn100622,
  en101122:en101122,
  cn101122:cn101122,
  en101322:en101322,
  cn101322:cn101322,
  en101222:en101222,
  cn101222:cn101222,
  en101422:en101422,
  cn101422:cn101422,
  en101922:en101922,
  cn101922:cn101922,
  end101922:end101922,
  cnd101922:cnd101922,
  end101422:end101422,
  cnd101422:cnd101422,
  enf101422:enf101422,
  cnf101422:cnf101422,
  en102022:en102022,
  cn102022:cn102022,
  en072022:en072022,
  cn072022:cn072022,
  end102022:end102022,
  cnd102022:cnd102022,
  en102322:en102322,
  cn102322:cn102322,
  en102422:en102422,
  cn102422:cn102422,
  en102522:en102522,
  cn102522:cn102522,
  en102622:en102622,
  cn102622:cn102622,
  end102622:end102622,
  cnd102622:cnd102622,
  en103122:en103122,
  cn103122:cn103122,
  end103122:end103122,
  cnd103122:cnd103122,
  en110122:en110122,
  cn110122:cn110122,
  end110122:end110122,
  cnd110122:cnd110122,
  en110222:en110222,
  cn110222:cn110222,
  end110222:end110222,
  cnd110222:cnd110222,
  ena260:ena260,
  cna260:cna260,
  enb260:enb260,
  cnb260:cnb260,
  enc260:enc260,
  cnc260:cnc260,
  end260:end260,
  cnd260:cnd260,
  ene260:ene260,
  cne260:cne260,
  ena300:ena300,
  cna300:cna300,
  enb300:enb300,
  cnb300:cnb300,
  enc300:enc300,
  cnc300:cnc300,
  end300:end300,
  cnd300:cnd300,
  ene300:ene300,
  cne300:cne300,
  enf300:enf300,
  cnf300:cnf300,
  ena95:ena95,
  cna95:cna95,
  enb95:enb95,
  cnb95:cnb95,
  ena240:ena240,
  cna240:cna240,
  enb240:enb240,
  cnb240:cnb240,
  enc240:enc240,
  cnc240:cnc240,
  end240:end240,
  cnd240:cnd240,
  ene240:ene240,
  cne240:cne240,
  ena117:ena117,
  cna117:cna117,
  enb117:enb117,
  cnb117:cnb117,
  enc117:enc117,
  cnc117:cnc117,
  end117:end117,
  cnd117:cnd117,
  
}
