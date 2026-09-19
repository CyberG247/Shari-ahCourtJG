'use client'

import React, { useState, useMemo } from 'react'
import { 
  Calendar, 
  Search, 
  Filter, 
  Printer, 
  Download, 
  Clock, 
  Scale, 
  MapPin, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

interface CauseListItem {
  id: string
  suitNumber: string
  parties: string
  division: string
  courtroom: string
  panel: string
  matterType: string
  time: string
  date: string
  status: 'In Progress' | 'Slated 9:00 AM' | 'Reserved for Judgment' | 'Adjourned' | 'Concluded'
}

export default function CauseListTracker() {
  const [divisionFilter, setDivisionFilter] = useState('all')
  const [judgeFilter, setJudgeFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  const initialCauseList: CauseListItem[] = [
    {
      id: '1',
      suitNumber: 'SCA/JG/CV/04/2024',
      parties: 'Alhaji Musa Garba v. Aisha Umar & Ors',
      division: 'Dutse Central Headquarters',
      courtroom: 'Courtroom 1 (Appellate Chamber)',
      panel: 'Hon. Grand Kadi Muhammad Sani Salihu (Presiding), Hon. Kadi Umar Nasir Ahmad, Hon. Kadi Bala Musa Ph.D',
      matterType: 'Hearing of Substantive Appeal (Mirath Estate)',
      time: '09:00 AM',
      date: '2025-09-18',
      status: 'In Progress'
    },
    {
      id: '2',
      suitNumber: 'SCA/JG/AP/11/2024',
      parties: 'Suleiman Babandi v. Fatima Abdullahi',
      division: 'Dutse Central Headquarters',
      courtroom: 'Courtroom 1 (Appellate Chamber)',
      panel: 'Hon. Grand Kadi Muhammad Sani Salihu (Presiding), Hon. Kadi Umar Nasir Ahmad, Hon. Kadi Bala Musa Ph.D',
      matterType: 'Motion on Notice for Extension of Time',
      time: '10:30 AM',
      date: '2025-09-18',
      status: 'Slated 9:00 AM'
    },
    {
      id: '3',
      suitNumber: 'SCA/JG/HD/08/2024',
      parties: 'Balarabe Haruna Hadejia v. Jamila Lawan',
      division: 'Hadejia Judicial Division',
      courtroom: 'Hadejia Court Hall A',
      panel: 'Hon. Kadi Safiyanu (Presiding), Hon. Kadi Aliyu Muhammad',
      matterType: 'Delivery of Appellate Judgment (Custody & Hadanah)',
      time: '10:00 AM',
      date: '2025-09-18',
      status: 'Reserved for Judgment'
    },
    {
      id: '4',
      suitNumber: 'SCA/JG/KZ/14/2024',
      parties: 'Mallam Idris Kazaure v. Amina Bello',
      division: 'Kazaure Judicial Division',
      courtroom: 'Kazaure Judicial Hall',
      panel: 'Hon. Kadi Ibrahim Ya’u (Presiding), Hon. Kadi Mustapha Abdullahi',
      matterType: 'Cross-Appeals Hearing (Matrimonial Property)',
      time: '11:15 AM',
      date: '2025-09-18',
      status: 'Slated 9:00 AM'
    },
    {
      id: '5',
      suitNumber: 'SCA/JG/GM/02/2024',
      parties: 'Trustees of Gumel Waqf Estate v. Alhaji Sanusi',
      division: 'Gumel Judicial Division',
      courtroom: 'Gumel Chamber 2',
      panel: 'Hon. Kadi Mustapha Abdullahi (Presiding), Hon. Kadi Usman Haruna',
      matterType: 'Mention & Filing of Record of Proceedings',
      time: '11:45 AM',
      date: '2025-09-18',
      status: 'Slated 9:00 AM'
    },
    {
      id: '6',
      suitNumber: 'SCA/JG/CV/29/2023',
      parties: 'Hajiya Maryam Dutse v. Usman Rabiu & 4 Ors',
      division: 'Dutse Central Headquarters',
      courtroom: 'Courtroom 2',
      panel: 'Hon. Kadi Umar Nasir Ahmad (Presiding), Hon. Kadi Ibrahim Ya’u',
      matterType: 'Settlement Conference & Report of Registry',
      time: '12:30 PM',
      date: '2025-09-18',
      status: 'Adjourned'
    }
  ]

  const filteredItems = useMemo(() => {
    return initialCauseList.filter(item => {
      const matchDivision = divisionFilter === 'all' || item.division.toLowerCase().includes(divisionFilter.toLowerCase())
      const matchJudge = judgeFilter === 'all' || item.panel.toLowerCase().includes(judgeFilter.toLowerCase())
      const matchSearch = searchQuery.trim() === '' || 
        item.suitNumber.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.parties.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.matterType.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchDivision && matchJudge && matchSearch
    })
  }, [divisionFilter, judgeFilter, searchQuery])

  // Calendar .ics generator for counsel
  const downloadCalendarEvent = (item: CauseListItem) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Jigawa State Shari\'ah Court of Appeal//Cause List Docket//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Court Sitting: ${item.suitNumber} (${item.parties})`,
      `DESCRIPTION:Matter: ${item.matterType}\\nPanel: ${item.panel}\\nLocation: ${item.division} (${item.courtroom})`,
      `LOCATION:${item.division} - ${item.courtroom}`,
      `DTSTART:${item.date.replace(/-/g, '')}T090000Z`,
      `DTEND:${item.date.replace(/-/g, '')}T130000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.setAttribute('download', `${item.suitNumber.replace(/\//g, '_')}_Court_Hearing.ics`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div id="cause-list-section" className="w-full">
      <Card className="border border-gray-200 shadow-judicial rounded-2xl overflow-hidden bg-white">
        <CardHeader className="bg-court-green-950 text-white p-6 border-b-2 border-court-gold-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1.5 rounded-lg bg-court-gold-500 text-court-green-950">
                  <Calendar className="w-4 h-4" />
                </span>
                <CardTitle className="text-lg sm:text-xl font-bold text-white">
                  Real-time Cause List & Appellate Hearing Tracker
                </CardTitle>
              </div>
              <CardDescription className="text-court-sand-200 text-xs sm:text-sm">
                Official docket of causes slated for hearing, ruling, or judgment across all Jigawa State appellate divisions.
              </CardDescription>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.print()}
                className="bg-court-green-900 border-court-gold-400/50 text-white hover:bg-court-green-800 text-xs"
              >
                <Printer className="w-3.5 h-3.5 mr-1 text-court-gold-400" />
                Print Docket
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {/* Filter Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-court-sand-50 border border-court-sand-200">
            {/* Search Input */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-700">Search Suit No. or Litigant</label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="e.g. SCA/JG/CV/04/2024"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 text-xs bg-white"
                />
              </div>
            </div>

            {/* Division Filter */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-700">Filter by Division</label>
              <Select value={divisionFilter} onValueChange={setDivisionFilter}>
                <SelectTrigger className="text-xs bg-white">
                  <SelectValue placeholder="All Divisions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Divisions (27 LGAs)</SelectItem>
                  <SelectItem value="Dutse">Dutse Headquarters</SelectItem>
                  <SelectItem value="Hadejia">Hadejia Division</SelectItem>
                  <SelectItem value="Kazaure">Kazaure Division</SelectItem>
                  <SelectItem value="Gumel">Gumel Division</SelectItem>
                  <SelectItem value="Ringim">Ringim Division</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Judge Filter */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-700">Presiding Judicial Panel</label>
              <Select value={judgeFilter} onValueChange={setJudgeFilter}>
                <SelectTrigger className="text-xs bg-white">
                  <SelectValue placeholder="All Kadis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Presiding Kadis</SelectItem>
                  <SelectItem value="Grand Kadi Muhammad Sani Salihu">Hon. Grand Kadi M. S. Salihu</SelectItem>
                  <SelectItem value="Umar Nasir Ahmad">Hon. Kadi Umar Nasir Ahmad</SelectItem>
                  <SelectItem value="Safiyanu">Hon. Kadi Safiyanu</SelectItem>
                  <SelectItem value="Bala Musa">Hon. Kadi Bala Musa Ph.D</SelectItem>
                  <SelectItem value="Ibrahim Ya’u">Hon. Kadi Ibrahim Ya’u</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date Selector */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-700">Sitting Session Date</label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="text-xs bg-white"
              />
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3 px-1">
            <div>
              Showing <strong>{filteredItems.length}</strong> listed appeal matters for <strong>{new Date(selectedDate).toLocaleDateString('en-GB', { dateStyle: 'full' })}</strong>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                In Progress
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Slated
              </span>
            </div>
          </div>

          {/* Mobile Cards View (< md) */}
          <div className="md:hidden space-y-3">
            {filteredItems.length === 0 ? (
              <div className="p-6 text-center text-gray-500 text-xs bg-court-sand-50 rounded-xl border border-gray-200">
                No cause list items match the selected division or query criteria.
              </div>
            ) : (
              filteredItems.map((item) => {
                const statusColor = 
                  item.status === 'In Progress' 
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300 animate-pulse' 
                    : item.status === 'Reserved for Judgment'
                      ? 'bg-purple-100 text-purple-900 border-purple-300 font-bold'
                      : item.status === 'Adjourned'
                        ? 'bg-red-100 text-red-900 border-red-300'
                        : 'bg-amber-100 text-amber-900 border-amber-300'

                return (
                  <div key={item.id} className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-mono font-bold text-court-green-900 text-xs block">
                          {item.suitNumber}
                        </span>
                        <div className="text-[11px] text-gray-500">{item.division}</div>
                      </div>
                      <Badge className={`text-[10px] font-bold border ${statusColor}`}>
                        {item.status}
                      </Badge>
                    </div>

                    <div className="text-xs font-semibold text-gray-900">
                      {item.parties}
                    </div>

                    <div className="text-[11px] text-gray-700 bg-court-sand-50 p-2 rounded-lg border border-court-sand-200">
                      <span className="font-bold text-court-slate-900">Nature:</span> {item.matterType}
                    </div>

                    <div className="text-[11px] text-gray-600">
                      <div className="font-medium text-gray-900">{item.courtroom}</div>
                      <div className="text-[10px] text-gray-500">{item.panel}</div>
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs font-semibold text-gray-700">
                        <Clock className="w-3.5 h-3.5 text-court-gold-600" />
                        <span>{item.time}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => downloadCalendarEvent(item)}
                        className="text-court-green-800 text-xs h-7 px-2.5 font-semibold border-court-green-800"
                      >
                        <Download className="w-3 h-3 mr-1 text-court-gold-600" />
                        Add .ics
                      </Button>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* Desktop/Tablet Data Table (hidden on mobile, visible md+) */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 mobile-touch-scroll">
            <table className="w-full text-left text-xs">
              <thead className="bg-court-sand-100 text-court-slate-900 uppercase font-bold text-[10px] tracking-wider border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Suit Number</th>
                  <th className="py-3 px-4">Litigant Parties</th>
                  <th className="py-3 px-4">Matter Nature</th>
                  <th className="py-3 px-4">Panel &amp; Courtroom</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Calendar Sync</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-gray-500">
                      No cause list items match the selected division or query criteria.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => {
                    const statusColor = 
                      item.status === 'In Progress' 
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300 animate-pulse' 
                        : item.status === 'Reserved for Judgment'
                          ? 'bg-purple-100 text-purple-900 border-purple-300 font-bold'
                          : item.status === 'Adjourned'
                            ? 'bg-red-100 text-red-900 border-red-300'
                            : 'bg-amber-100 text-amber-900 border-amber-300'

                    return (
                      <tr key={item.id} className="hover:bg-court-sand-50/70 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-court-green-900 whitespace-nowrap">
                          {item.suitNumber}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-gray-900 max-w-xs">
                          <div>{item.parties}</div>
                          <div className="text-[11px] text-gray-400">{item.division}</div>
                        </td>
                        <td className="py-3.5 px-4 text-gray-700">
                          {item.matterType}
                        </td>
                        <td className="py-3.5 px-4 text-gray-600 max-w-xs">
                          <div className="text-gray-900 font-medium">{item.courtroom}</div>
                          <div className="text-[10px] text-gray-500 truncate" title={item.panel}>
                            {item.panel}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-gray-800 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-court-gold-600" />
                            <span>{item.time}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <Badge className={`text-[10px] font-bold border ${statusColor}`}>
                            {item.status}
                          </Badge>
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => downloadCalendarEvent(item)}
                            className="text-court-green-800 hover:text-court-green-900 hover:bg-court-green-50 text-xs px-2.5 h-8 font-semibold"
                            title="Add hearing date to your calendar (.ics)"
                          >
                            <Download className="w-3.5 h-3.5 mr-1 text-court-gold-600" />
                            .ics
                          </Button>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
