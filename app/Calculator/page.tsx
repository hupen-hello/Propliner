"use client";

import React, { useState, useEffect } from "react";
import { 
  TbCalculator, TbMapPin, TbRuler, TbUsers, TbCalendar, 
  TbBuilding, TbTools, TbReceipt2, TbTrendingUp, TbLock, 
  TbHammer, TbCalendarRepeat, TbStar, TbArrowsLeftRight, 
  TbInfoCircle, TbPhone, TbBuildingEstate, TbBrandWhatsapp 
} from "react-icons/tb";

// ================= DATA & CONSTANTS =================
const RENT: Record<string, { min: number; max: number; avg: number }> = {
  sec62:      { min: 65,  max: 85,  avg: 75  },
  expressway: { min: 65,  max: 95,  avg: 78  },
  filmcity:   { min: 90,  max: 135, avg: 110 },
  sec125:     { min: 75,  max: 115, avg: 92  },
  gn:         { min: 45,  max: 65,  avg: 55  }
};

const GURGAON_RATE = 165;
const TYPE_MULT: Record<string, number | null> = { warmshell: 1, furnished: 1.2, plugplay: 1.45, cowork: null, bare: 0.85 };
const TYPE_FITOUT: Record<string, number> = { warmshell: 1500, furnished: 0, plugplay: 0, cowork: 0, bare: 2500 };
const TYPE_DEPOSIT: Record<string, number> = { warmshell: 6, furnished: 3, plugplay: 3, cowork: 2, bare: 6 };
const CAM = 15;
const SQ_PER_EMP = 70;

const LOC_NAMES: Record<string, string> = {
  sec62: 'Sector 62', expressway: 'Noida Expressway',
  filmcity: 'Film City / Sector 16', sec125: 'Sector 125/126', gn: 'Greater Noida'
};

export default function RentCalculator() {
  // ================= STATE =================
  const [curLoc, setCurLoc] = useState('sec62');
  const [curType, setCurType] = useState('warmshell');
  const [curArea, setCurArea] = useState(5000);
  const [empCount, setEmpCount] = useState(70);
  const [inputMode, setInputMode] = useState<'area' | 'emp'>('area');
  const [leaseTerm, setLeaseTerm] = useState('3');

  // ================= FORMATTING HELPERS =================
  const fmt = (n: number) => {
    if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
    if (n >= 100000)   return '₹' + (n / 100000).toFixed(1) + ' L';
    return '₹' + Math.round(n).toLocaleString('en-IN');
  };

  const fmtCompact = (n: number) => {
    if (n >= 10000000) return (n / 10000000).toFixed(2) + ' Cr / year';
    if (n >= 100000)   return (n / 100000).toFixed(1) + ' L / year';
    return Math.round(n).toLocaleString('en-IN') + ' / year';
  };

  // ================= CALCULATIONS =================
  const r = RENT[curLoc];
  const area = curArea;
  let monthly = 0, camAmt = 0, rate = 0, seats = 0;
  
  const isCowork = curType === 'cowork';
  const hasFitout = TYPE_FITOUT[curType] > 0;

  if (isCowork) {
    seats = Math.ceil(area / SQ_PER_EMP);
    monthly = seats * 9000;
    camAmt  = 0;
  } else {
    rate = Math.round(r.avg * (TYPE_MULT[curType] || 1));
    camAmt = CAM * area;
    monthly = (rate * area) + camAmt;
  }

  const annual = monthly * 12;
  const dep_mo = TYPE_DEPOSIT[curType];
  const deposit = monthly * dep_mo;
  const fitout = isCowork ? 0 : TYPE_FITOUT[curType] * area;
  const year1 = deposit + fitout + annual;

  const gurgaon_annual = GURGAON_RATE * area * 12;
  const noida_pct = Math.round((annual / gurgaon_annual) * 100);
  const saving = gurgaon_annual - annual;

  // Handlers for sliders
  const handleAreaChange = (val: number) => {
    setCurArea(val);
    setEmpCount(Math.ceil(val / SQ_PER_EMP));
  };

  const handleEmpChange = (val: number) => {
    setEmpCount(val);
    setCurArea(Math.min(val * SQ_PER_EMP, 50000));
  };

  return (
    <div className="min-h-screen bg-[#f5f4f1] text-[#1a1917] font-sans p-4 sm:p-8">
      <div className="max-w-[780px] mx-auto">
        
        

        {/* ================= INPUT CARD ================= */}
        <div className="bg-white rounded-2xl border border-black/10 shadow-sm p-6 mb-4">
          <h2 className="text-[15px] font-semibold mb-4 flex items-center gap-2">
            <TbCalculator className="text-[#1a4d8c] text-lg" /> Office Rent Calculator
          </h2>

          {/* Location Tabs */}
          <p className="text-[11px] font-semibold text-[#9a9790] uppercase tracking-wider mb-2">Select location</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {[
              { id: 'sec62', label: 'Sector 62' },
              { id: 'expressway', label: 'Noida Expressway' },
              { id: 'filmcity', label: 'Film City / Sec 16' },
              { id: 'sec125', label: 'Sec 125 / 126' },
              { id: 'gn', label: 'Greater Noida' }
            ].map(loc => (
              <button 
                key={loc.id} onClick={() => setCurLoc(loc.id)}
                className={`flex-1 min-w-[90px] px-3 py-2 text-[13px] border rounded-md transition-all ${
                  curLoc === loc.id ? 'bg-[#1a4d8c] text-white border-[#1a4d8c] font-medium' : 'bg-[#f0efe9] text-[#5a5853] border-black/10 hover:bg-[#e8f0f9] hover:text-[#1a4d8c] hover:border-[#1a4d8c]'
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>

          {/* Office Type Tabs */}
          <p className="text-[11px] font-semibold text-[#9a9790] uppercase tracking-wider mb-2">Office type</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {[
              { id: 'warmshell', label: 'Warm Shell' },
              { id: 'furnished', label: 'Furnished' },
              { id: 'plugplay', label: 'Plug & Play' },
              { id: 'cowork', label: 'Co-working' },
              { id: 'bare', label: 'Bare Shell' }
            ].map(type => (
              <button 
                key={type.id} onClick={() => setCurType(type.id)}
                className={`flex-1 min-w-[90px] px-3 py-2 text-[13px] border rounded-md transition-all ${
                  curType === type.id ? 'bg-[#1a4d8c] text-white border-[#1a4d8c] font-medium' : 'bg-[#f0efe9] text-[#5a5853] border-black/10 hover:bg-[#e8f0f9] hover:text-[#1a4d8c] hover:border-[#1a4d8c]'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            
            {/* Area / Emp Toggle Section */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-[#5a5853] font-medium flex items-center gap-1">
                {inputMode === 'area' ? <TbRuler /> : <TbUsers />} 
                {inputMode === 'area' ? 'Area (sq. ft.)' : 'Number of employees'}
              </label>

              {inputMode === 'area' ? (
                <div className="flex items-center gap-3">
                  <input type="range" min="500" max="50000" step="500" value={curArea} onChange={(e) => handleAreaChange(Number(e.target.value))}
                    className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1a4d8c]" />
                  <span className="text-[13px] font-semibold text-[#1a4d8c] min-w-[80px] text-right">{curArea.toLocaleString('en-IN')} sq.ft.</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <input type="range" min="5" max="500" step="5" value={empCount} onChange={(e) => handleEmpChange(Number(e.target.value))}
                    className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1a4d8c]" />
                  <span className="text-[13px] font-semibold text-[#1a4d8c] min-w-[80px] text-right">{empCount} people</span>
                </div>
              )}

              <div className="flex items-center gap-2 mt-2">
                <span className="text-[12px] text-[#5a5853]">Input by:</span>
                <button onClick={() => setInputMode('area')} className={`px-3 py-1 text-[12px] rounded-full border transition-all ${inputMode === 'area' ? 'bg-[#e8f0f9] text-[#1a4d8c] border-[#1a4d8c] font-medium' : 'bg-transparent text-[#5a5853] border-black/10'}`}>Area</button>
                <button onClick={() => setInputMode('emp')} className={`px-3 py-1 text-[12px] rounded-full border transition-all ${inputMode === 'emp' ? 'bg-[#e8f0f9] text-[#1a4d8c] border-[#1a4d8c] font-medium' : 'bg-transparent text-[#5a5853] border-black/10'}`}>Headcount</button>
              </div>
            </div>

            {/* Lease Term */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-[#5a5853] font-medium flex items-center gap-1"><TbCalendar /> Lease term</label>
              <select value={leaseTerm} onChange={(e) => setLeaseTerm(e.target.value)} className="w-full px-3 py-2 text-[13px] border border-black/10 rounded-md bg-[#f0efe9] focus:outline-none focus:ring-2 focus:ring-[#1a4d8c]">
                <option value="1">1 year</option>
                <option value="3">3 years</option>
                <option value="5">5 years</option>
                <option value="9">9 years</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= RESULTS CARD ================= */}
        <div className="bg-white rounded-2xl border border-black/10 shadow-sm p-6 mb-4">
          <h2 className="text-[15px] font-semibold mb-4 flex items-center gap-2">
            <TbReceipt2 className="text-[#1a4d8c] text-lg" /> Monthly Cost Estimate
          </h2>

          {/* Metric Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-5">
            <div className="bg-[#f0efe9] p-3 rounded-xl border border-black/10">
              <div className="text-[12px] text-[#5a5853] mb-1.5 flex items-center gap-1"><TbBuilding /> Base rent</div>
              <div className="text-xl font-semibold leading-tight">{isCowork ? fmt(monthly) : fmt(rate * area)}</div>
              <div className="text-[11px] text-[#9a9790] mt-1">{isCowork ? '₹9,000 / seat / month' : `₹${rate} / sq.ft. / month`}</div>
            </div>
            
            <div className="bg-[#f0efe9] p-3 rounded-xl border border-black/10">
              <div className="text-[12px] text-[#5a5853] mb-1.5 flex items-center gap-1"><TbTools /> CAM charges</div>
              <div className="text-xl font-semibold leading-tight">{isCowork ? 'Included' : fmt(camAmt)}</div>
              <div className="text-[11px] text-[#9a9790] mt-1">{isCowork ? `${seats} seats estimated` : 'common area maintenance'}</div>
            </div>

            <div className="bg-[#e8f0f9] p-3 rounded-xl border border-[#1a4d8c]/20">
              <div className="text-[12px] text-[#5a5853] mb-1.5 flex items-center gap-1"><TbReceipt2 /> Monthly total</div>
              <div className="text-xl font-semibold leading-tight text-[#1a4d8c]">{fmt(monthly)}</div>
              <div className="text-[11px] text-[#9a9790] mt-1">rent + CAM</div>
            </div>

            <div className="bg-[#f0efe9] p-3 rounded-xl border border-black/10">
              <div className="text-[12px] text-[#5a5853] mb-1.5 flex items-center gap-1"><TbTrendingUp /> Annual outflow</div>
              <div className="text-xl font-semibold leading-tight">{fmt(annual)}</div>
              <div className="text-[11px] text-[#9a9790] mt-1">{fmtCompact(annual)}</div>
            </div>
          </div>

          <hr className="border-black/10 my-5" />

          {/* Breakdown List */}
          <p className="text-[11px] font-semibold text-[#9a9790] uppercase tracking-wider mb-2">First-year cost breakdown</p>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center pb-2 border-b border-black/10 text-[13px]">
              <div className="text-[#5a5853] flex items-center gap-1.5"><TbLock className="text-[#9a9790]"/> Security deposit <span className="text-[11px] text-[#9a9790]">({dep_mo} months)</span></div>
              <div className="font-semibold">{fmt(deposit)}</div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-black/10 text-[13px]">
              <div className="text-[#5a5853] flex items-center gap-1.5">
                <TbHammer className="text-[#9a9790]"/> Fit-out estimate 
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ml-1 ${hasFitout ? 'bg-[#fef3e2] text-[#7a5518]' : 'bg-[#e6f4ec] text-[#1a6b3a]'}`}>
                  {hasFitout ? 'estimated' : 'nil'}
                </span>
              </div>
              <div className="font-semibold">{fitout === 0 ? '—' : fmt(fitout)}</div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-black/10 text-[13px]">
              <div className="text-[#5a5853] flex items-center gap-1.5"><TbCalendarRepeat className="text-[#9a9790]"/> Annual rent + CAM</div>
              <div className="font-semibold">{fmt(annual)}</div>
            </div>
          </div>

          <div className="flex justify-between items-center bg-[#1a4d8c] text-white rounded-xl px-4 py-3">
            <div className="text-[13px] font-medium flex items-center gap-1"><TbStar className="text-lg"/> Year 1 total investment</div>
            <div className="text-[18px] font-semibold">{fmt(year1)}</div>
          </div>
        </div>

        {/* ================= GURGAON COMPARISON ================= */}
        <div className="bg-white rounded-2xl border border-black/10 shadow-sm p-6 mb-4">
          <h2 className="text-[15px] font-semibold mb-4 flex items-center gap-2">
            <TbArrowsLeftRight className="text-[#1a4d8c] text-lg" /> Noida vs Gurgaon Savings
          </h2>
          <div className="bg-[#f0efe9] p-4 rounded-xl border border-black/10">
            <p className="text-[12px] font-semibold text-[#5a5853] mb-3">Annual rent comparison for the same area</p>
            
            <div className="mb-3">
              <div className="flex justify-between text-[12px] text-[#5a5853] mb-1">
                <span>Noida (your selection)</span>
                <span>{fmt(annual)}/yr</span>
              </div>
              <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#1a4d8c] transition-all duration-500 rounded-full" style={{width: `${noida_pct}%`}}></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-[12px] text-[#5a5853] mb-1">
                <span>Gurgaon equivalent</span>
                <span>{fmt(gurgaon_annual)}/yr</span>
              </div>
              <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#e07b3a] rounded-full w-full"></div>
              </div>
            </div>

            <div className="text-center mt-3 text-[12px] font-semibold text-[#1a6b3a]">
              {saving > 0 ? `✓ You save approx. ${fmt(saving)} per year vs Gurgaon` : 'Comparable to Gurgaon rates'}
            </div>
          </div>
        </div>

        {/* ================= INFO & CTA ================= */}
        <div className="bg-white rounded-2xl border border-black/10 shadow-sm p-6">
          <div className="flex items-start gap-2 bg-[#fdf3e0] border border-[#b07d2a]/20 p-3 rounded-xl text-[#b07d2a] text-[12px] leading-relaxed">
            <TbInfoCircle className="text-lg flex-shrink-0 mt-0.5" />
            <p>
              {isCowork 
                ? 'Co-working rates are ₹7,000–₹12,000 / seat / month (all-inclusive). No security deposit or fit-out CAPEX required. Flexible terms — ideal for teams up to 25 people.'
                : `Rates reflect Grade A/B benchmarks in ${LOC_NAMES[curLoc]}. CAM, parking, and electricity surcharges are additional. Standard escalation of 15% every 3 years. Contact Propliners for verified inventory.`
              }
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            <a href="#" className="flex-1 min-w-[200px] flex justify-center items-center gap-1.5 bg-[#1a4d8c] hover:bg-[#153e70] text-white py-2.5 px-4 rounded-lg text-[13px] font-medium transition-colors">
              <TbPhone /> Get a Free Consultation
            </a>
            <a href="#" className="flex-1 min-w-[200px] flex justify-center items-center gap-1.5 bg-transparent hover:bg-[#f0efe9] border border-black/20 text-[#5a5853] py-2.5 px-4 rounded-lg text-[13px] font-medium transition-colors">
              <TbBuildingEstate /> Browse Noida Listings
            </a>
            <a href="#" className="flex-1 min-w-[200px] flex justify-center items-center gap-1.5 bg-transparent hover:bg-[#f0efe9] border border-black/20 text-[#5a5853] py-2.5 px-4 rounded-lg text-[13px] font-medium transition-colors">
              <TbBrandWhatsapp className="text-green-600" /> WhatsApp Us
            </a>
          </div>
        </div>


      </div>
    </div>
  );
}