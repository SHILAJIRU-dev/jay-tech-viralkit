"use client";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Viral Content Calendar | Jay Tech Viralkit',
  description: 'Plan and schedule your social media content with our easy-to-use visual calendar for creators.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png',}, 
  keywords: ['content calendar', 'social media planner', 'scheduling tool', 'content planner'],
};

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { CalendarPlus, Trash2 } from 'lucide-react';

// Define the type for our events for better type safety
type ContentEvent = {
  text: string;
};

type Events = {
  [key: string]: ContentEvent;
};

export default function ContentCalendar() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<Events>({
    // Example event
    [format(new Date(), 'yyyy-MM-dd')]: { text: "Brainstorm new TikTok ideas!" }
  });
  const [eventInput, setEventInput] = useState('');

  const handleAddEvent = () => {
    if (!selectedDay || !eventInput) return;

    const dateKey = format(selectedDay, 'yyyy-MM-dd');
    setEvents(prev => ({
      ...prev,
      [dateKey]: { text: eventInput }
    }));
    setEventInput('');
  };

  const handleDeleteEvent = (dateKey: string) => {
    setEvents(prev => {
      const newEvents = { ...prev };
      delete newEvents[dateKey];
      return newEvents;
    });
  };

  const selectedDayKey = selectedDay ? format(selectedDay, 'yyyy-MM-dd') : '';
  const selectedDayEvent = events[selectedDayKey];

  // Custom styling for the DayPicker component to match our theme
  const classNames = {
    root: 'bg-brand-light-blue p-4 rounded-xl border border-brand-border-blue',
    caption: 'flex items-center justify-between py-2 mb-4',
    caption_label: 'text-lg font-bold text-white',
    nav_button: 'h-8 w-8 flex items-center justify-center rounded-full hover:bg-brand-dark-blue transition-colors',
    head_cell: 'w-12 h-12 font-medium text-gray-400',
    cell: 'w-12 h-12',
    day: 'w-full h-full rounded-full hover:bg-brand-dark-blue transition-colors',
    day_selected: 'bg-brand-orange text-white hover:bg-brand-orange',
    day_today: 'font-bold text-brand-orange',
    day_disabled: 'text-gray-600',
    day_outside: 'text-gray-600',
    day_hidden: 'hidden',
  };

  const modifiers = {
    hasEvent: Object.keys(events).map(dateStr => new Date(dateStr + 'T00:00:00')) // Mark days with events
  };
  
  const modifiersStyles = {
    hasEvent: {
      border: '2px solid #FF5722',
      color: '#FF5722',
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Calendar Column */}
      <div className="md:col-span-2">
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
          classNames={classNames}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          showOutsideDays
          fixedWeeks
        />
      </div>

      {/* Events Column */}
      <div className="bg-brand-light-blue p-6 rounded-xl border border-brand-border-blue">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <CalendarPlus className="mr-3 text-brand-orange" />
          Content Plan
        </h2>
        {selectedDay ? (
          <div>
            <p className="text-gray-300 font-semibold mb-4">
              {format(selectedDay, 'PPP')}
            </p>
            {selectedDayEvent ? (
              <div className="bg-brand-dark-blue p-4 rounded-lg">
                <p className="text-white">{selectedDayEvent.text}</p>
                <button 
                  onClick={() => handleDeleteEvent(selectedDayKey)}
                  className="text-red-500 hover:text-red-400 transition-colors mt-2 text-sm flex items-center"
                >
                  <Trash2 size={14} className="mr-1" /> Delete
                </button>
              </div>
            ) : (
              <div>
                <p className="text-gray-400 mb-2">No content planned for this day.</p>
                <input
                  type="text"
                  value={eventInput}
                  onChange={(e) => setEventInput(e.target.value)}
                  placeholder="Add a content idea..."
                  className="w-full p-3 bg-brand-dark-blue border-2 border-brand-border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                />
                <button
                  onClick={handleAddEvent}
                  className="w-full bg-brand-orange text-white font-bold py-2 px-4 rounded-lg mt-2 hover:bg-opacity-90 transition-colors"
                >
                  Add Idea
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-400">Select a day to plan your content.</p>
        )}
      </div>
    </div>
  );
}