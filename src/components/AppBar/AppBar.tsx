import React from "react"
import DropDown, { IStyle } from "./DropDown"
import { aboutOptions, productsOptions, technologyOptions, infrastructureOptions, transparencyOptions, communityOptions } from "./DropDownContents"
// import logo from "../../assets/img/logo.png"

const AppBar: React.FC = () => {

  return (
    <div className="flex justify-between items-center py-4 px-20 border-b text-gray-500">
      <div>
        <a href="/"><img className="min-w-[100px]" src="icons/logo.png" alt="L3A protocol logo" /></a>
      </div>
      <div className="flex justify-between items-center gap-10">
        <div className="appbar__item relative">
          <div className="cursor-pointer p-5">About</div>
          <div className="dropdown absolute top-15">
            <DropDown style={IStyle.list} options={aboutOptions} />
          </div>
        </div>
        <div className="appbar__item relative">
          <div className="cursor-pointer p-5">Products</div>
          <div className="dropdown absolute top-15">
            <DropDown style={IStyle.list} options={productsOptions} />
          </div>
        </div>
        <div className="appbar__item relative">
          <div className="cursor-pointer p-5">Technology</div>
          <div className="dropdown absolute top-15">
            <DropDown
              style={IStyle.grid}
              description="Achieving Graphine Oxide-based laser patterned photonic memristors with sizes comparable to those of the biological synapses (20–40 nm) It will require fabrication methods able to go beyond the diffraction limit."
              options={technologyOptions}
            />
          </div>
        </div>
        <div className="appbar__item relative">
          <div className="cursor-pointer p-5">Infrastructure</div>
          <div className="dropdown absolute top-15">
            <DropDown
              style={IStyle.grid}
              title="L3A v3"
              description="Achieving Graphine Oxide-based laser patterned photonic memristors with sizes comparable to those of the biological synapses (20–40 nm) It will require fabrication methods able to go beyond the diffraction limit."
              footer="Read more"
              isCrossLine={true}
              options={infrastructureOptions}
            />
          </div>
        </div>
        <div className="appbar__item relative">
          <div className="cursor-pointer p-5">Transparency & Governance</div>
          <div className="dropdown absolute top-15">
            <DropDown
              style={IStyle.grid}
              title="Better Governance"
              description="Achieving Graphine Oxide-based laser patterned photonic memristors with sizes comparable to those of the biological synapses (20–40 nm) It will require fabrication methods able to go beyond the diffraction limit."
              options={transparencyOptions}
            />
          </div>
        </div>
        <div className="appbar__item relative">
          <div className="cursor-pointer p-5">Community</div>
          <div className="dropdown absolute top-15">
            <DropDown style={IStyle.list} options={communityOptions} />
          </div>
        </div>
      </div>
      <div className="border border-blue-500 text-blue-500 text-center min-w-[130px] py-1 hover:text-gray-200">
        <a href="https://query.l3atom.com/superset/welcome/" target="_blank" rel="noreferrer">Start Building</a>
      </div>
    </div>
  )
}

export default AppBar