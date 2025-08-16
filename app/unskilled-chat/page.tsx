"use client"

import React, { useEffect } from "react"
import "../chat-theme.css"



export default function UnskilledChat() {
    useEffect(() => {
        // Load the ElevenLabs ConvAI script
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
        script.async = true
        script.type = 'text/javascript'
        document.body.appendChild(script)

        return () => {
            // Cleanup script on unmount
            try {
                if (script && document.body.contains(script)) {
                    document.body.removeChild(script)
                }
            } catch (error) {
                console.log('Script cleanup error:', error)
            }
        }
    }, [])

    return (
        <div className="h-screen w-full relative overflow-hidden">
            {/* Back button */}
            <div className="absolute top-4 left-4 z-[1001]">
                <button
                    onClick={() => window.history.back()}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition-colors"
                >
                    ← Back
                </button>
            </div>

            {/* Main iframe container */}
            <div className="w-full h-full">
                <iframe
                    src="https://n8n.projectsbyali.xyz/webhook/9445df79-1e72-4aaf-859f-091014787b9f/chat"
                    title="N8N Chat Interface"
                    className="w-full h-full border-none"
                    allow="microphone"
                />
            </div>

            {/* Text bubble above ElevenLabs ConvAI widget */}
            <div className="fixed bottom-24 right-5 z-[1000]">
                <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-lg border-2 border-[#007bff] max-w-xs relative">
                    <div className="text-sm font-medium text-center">
                        Hi, talk to me if you need any assistant! 💬
                    </div>
                    {/* Arrow pointing down to the widget */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#007bff]"></div>
                </div>
            </div>

            {/* ElevenLabs ConvAI widget in corner */}
            <div className="fixed bottom-5 right-5 z-[1000]">
                <div 
                    dangerouslySetInnerHTML={{
                        __html: '<elevenlabs-convai agent-id="agent_2601k2qs4hajf1er97rmnmxezb1v"></elevenlabs-convai>'
                    }}
                />
            </div>
        </div>
    )
}