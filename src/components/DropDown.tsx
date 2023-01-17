import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { IDropDownOption } from './DropDownContents'

export enum IStyle {
  list,
  grid
}
export interface IDropDown {
  style: IStyle,
  title?: string,
  description?: string,
  footer?: string,
  footerUrl?: string,
  isCrossLine?: boolean,
  options: IDropDownOption[]
}

const DropDown: React.FC<IDropDown> = (props) => {
  const { style, title, description, footer, footerUrl, isCrossLine, options } = props
  return (
    <div className="bg-white shadow-2xl">
      {(style === IStyle.list) &&
        <div className="flex flex-col w-[500px] p-10">
          {options.map((option, index) => (
            <a key={index} href={option.url} className={option.disabled ? "text-gray-300 flex items-center mb-10" : "flex items-center mb-10"}>
              <div className="min-w-[40px] max-w-[40px] mr-5"><img src={option.icon} alt="Menu icon" width="100%" height="auto" /></div>
              <div className="flex flex-col">
                <div className="font-bold mb-1 text-[18px]">{option.title}</div>
                <div className="text-[15px]">{option.description}</div>
              </div>
            </a>
          ))}
        </div>}
      {(style === IStyle.grid) &&
        <div className="flex flex-col w-[700px] p-10">
          <div className="mb-10">
            {title && <div className="font-bold mb-10 text-[25px]">{title}</div>}
            <div className="text-[15px]">{description}</div>
            {footer &&
              <div className="mt-10 text-[15px] underline">
                <a href={footerUrl} className="mr-5 cursor-pointer">{footer}</a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>}
          </div>
          {isCrossLine && <hr />}
          <div className="grid grid-cols-3 gap-6 mt-10 items-start">
            {options.map((option, index) => (
              <a key={index} href={option.url} className={option.disabled ? "text-gray-300 flex flex-col items-center justify-center text-center" : "flex flex-col items-center justify-center text-center"}>
                <div className="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px]"><img src={option.icon} alt="Menu icon" width="100%" height="100%" /></div>
                <div className="font-bold my-2 text-[18px]">{option.title}</div>
                <div className="text-[15px]">{option.description}</div>
              </a>
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default DropDown;