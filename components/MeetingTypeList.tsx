'use client'

import Image from "next/image"
import HomeCard from "./HomeCard"
import { useState } from "react"
import MeetingModel from "./MeetingModel"

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
    return (
        <section className=" grid grid-cols-1 gap-5 md:grid-cols-5 xl:grid-cols-4">
            <HomeCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                description="Start an instant meeting"
                handleClick={() => setMeetingState('isInstantMeeting')}
            />
            <HomeCard
                img="/icons/join-meeting.svg"
                title="Join Meeting"
                description="via invitation link"
                className="bg-blue-1"
                handleClick={() => setMeetingState('isJoiningMeeting')}
            />
            <HomeCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"
                className="bg-purple-1"
                handleClick={() => setMeetingState('isScheduleMeeting')}
            />
            <HomeCard
                img="/icons/recordings.svg"
                title="View Recordings"
                description="Meeting Recordings"
                className="bg-yellow-1"
                // handleClick={() => router.push('/recordings')}
            />
            <MeetingModel 
                  isOpen={meetingState === 'isScheduleMeeting'}
                  onClose={() => setMeetingState(undefined)}
                  title="Meeting Created"
                  handleClick={() => {
                   
                  }}
                  image={'/icons/checked.svg'}
                  buttonIcon="/icons/copy.svg"
                  className="text-center"
                  buttonText="Copy Meeting Link"
            />
        </section>
    )
}

export default MeetingTypeList