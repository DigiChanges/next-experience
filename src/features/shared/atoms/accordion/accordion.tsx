import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';


type Props = {
    className?:{
        accordion:string
    };
    accordionItemsProps:{
        ariaLabel:string;
        title:React.ReactNode;
    }
    accordionItems:React.ReactNode[]
}

export const AccordionComponent = ({ className, accordionItemsProps, accordionItems }: Props) => {
  return (
    <Accordion className={className?.accordion}>
      {accordionItems.length > 0 ? accordionItems.map((item, index) => (
        <AccordionItem key={index} {...accordionItemsProps}>
          {item}
        </AccordionItem>
      ))
        :
        <AccordionItem key='1' {...accordionItemsProps}>
          {accordionItems}
        </AccordionItem>}
    </Accordion>
  );
};
