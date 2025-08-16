"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Declare the custom element for TypeScript
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'elevenlabs-convai': {
                'agent-id': string;
                children?: React.ReactNode;
            }
        }
    }
}

type SkillLevel = "unskilled" | "skilled" | "idk" | "entrepreneur" | null

export default function SkillSelector() {
  const [selectedChoice, setSelectedChoice] = useState<SkillLevel>(null)
  const [showSurvey, setShowSurvey] = useState(false)

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

  const choices = [
    {
      id: "unskilled" as const,
      title: "1️⃣ Unskilled",
      description: "I don't have formal qualifications or experience 🌱",
      icon: "🐒",
    },
    {
      id: "skilled" as const,
      title: "2️⃣ Skilled",
      description: "I have a specific trade, technical skill, or profession 🔧",
      icon: "🐵🔧",
    },
    {
      id: "idk" as const,
      title: "3️⃣ IDK",
      description: "I'm not sure what category I fit in 🤔",
      icon: "🙈",
    },
    {
      id: "entrepreneur" as const,
      title: "4️⃣ Entrepreneur",
      description: "I want to start or grow a business 🚀",
      icon: "🐵💼",
    },
  ]

  const handleChoice = (choice: SkillLevel) => {
    setSelectedChoice(choice)
    
    if (choice === "unskilled") {
      // Redirect to unskilled chat page
      setTimeout(() => {
        window.location.href = "/unskilled-chat"
      }, 1000)
    } else {
      // Simulate transition to survey stage for other choices
      setTimeout(() => {
        setShowSurvey(true)
      }, 1000)
    }
  }



  const getChoiceLabel = (choice: SkillLevel) => {
    const choiceMap = {
      unskilled: "Unskilled 🐒",
      skilled: "Skilled 🐵🔧",
      idk: "IDK 🙈",
      entrepreneur: "Entrepreneur 🐵💼",
    }
    return choice ? choiceMap[choice] : ""
  }

  if (showSurvey) {
    return (
      <div className="min-h-screen bg-[#007bff] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl float-animation opacity-20">🎉</div>
          <div className="absolute top-20 right-20 text-4xl float-reverse-animation opacity-30">⭐</div>
          <div className="absolute bottom-20 left-20 text-5xl float-animation opacity-25">🚀</div>
          <div className="absolute bottom-10 right-10 text-3xl float-reverse-animation opacity-20">✨</div>
          <div className="absolute top-1/2 left-5 text-4xl float-animation opacity-15">🎯</div>
          <div className="absolute top-1/3 right-5 text-5xl float-reverse-animation opacity-20">💫</div>
          <div className="absolute top-1/4 left-1/3 text-3xl float-animation opacity-20">💻</div>
          <div className="absolute bottom-1/3 right-1/4 text-4xl float-reverse-animation opacity-15">🏗️</div>
          <div className="absolute top-2/3 right-10 text-3xl float-animation opacity-25">👩‍💼</div>
          <div className="absolute bottom-1/4 left-10 text-4xl float-reverse-animation opacity-20">🔨</div>
        </div>

        <Card className="w-full max-w-md bg-gradient-to-br from-white to-gray-50 border-4 border-white shadow-2xl relative z-10 rounded-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-[#007bff] font-bold">🎉 Great Choice! 🎉</CardTitle>
            <CardDescription className="text-gray-800 text-lg">
              You selected:{" "}
              <span className="font-bold text-[#ffdd00] bg-[#007bff] px-2 py-1 rounded-full">
                {getChoiceLabel(selectedChoice)}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-700 mb-6 text-lg">Now transitioning to the survey stage... ✨</p>
            <div className="animate-spin w-10 h-10 border-4 border-[#ffdd00] border-t-transparent rounded-full mx-auto"></div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#007bff] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl float-animation opacity-20">👷‍♂️</div>
        <div className="absolute top-20 right-20 text-4xl float-reverse-animation opacity-30">💻</div>
        <div className="absolute bottom-20 left-20 text-5xl float-diagonal-animation opacity-25">🔧</div>
        <div className="absolute bottom-10 right-10 text-3xl float-animation opacity-20">📊</div>
        <div className="absolute top-1/2 left-5 text-4xl float-reverse-animation opacity-15">💼</div>
        <div className="absolute top-1/3 right-5 text-5xl float-diagonal-animation opacity-20">🏗️</div>
        <div className="absolute top-3/4 left-1/4 text-3xl float-animation opacity-25">🚀</div>
        <div className="absolute top-1/4 right-1/3 text-4xl float-reverse-animation opacity-15">⚡</div>
        <div className="absolute bottom-1/3 left-1/3 text-3xl float-diagonal-animation opacity-20">👩‍💼</div>
        <div className="absolute top-1/6 left-2/3 text-4xl float-animation opacity-25">🔨</div>
        <div className="absolute bottom-1/2 right-1/3 text-3xl float-reverse-animation opacity-15">👨‍🔬</div>
        <div className="absolute top-2/3 right-1/4 text-4xl float-diagonal-animation opacity-20">🏭</div>
        <div className="absolute bottom-1/6 left-1/2 text-3xl float-animation opacity-25">📈</div>
        <div className="absolute top-1/3 left-1/6 text-4xl float-reverse-animation opacity-15">🎨</div>
        <div className="absolute bottom-2/3 right-1/6 text-4xl float-diagonal-animation opacity-20">🍳</div>
        <div className="absolute top-5 left-1/2 text-3xl float-animation opacity-15">👨‍💻</div>
        <div className="absolute top-1/4 left-5 text-4xl float-reverse-animation opacity-20">🏥</div>
        <div className="absolute bottom-5 right-1/2 text-3xl float-diagonal-animation opacity-15">✈️</div>
        <div className="absolute top-3/4 right-5 text-4xl float-animation opacity-20">🎭</div>
        <div className="absolute top-1/2 left-1/4 text-3xl float-reverse-animation opacity-15">📚</div>
        <div className="absolute bottom-1/4 right-2/3 text-4xl float-diagonal-animation opacity-20">🎵</div>
        <div className="absolute top-1/6 right-1/2 text-3xl float-animation opacity-15">🔬</div>
        <div className="absolute bottom-3/4 left-3/4 text-4xl float-reverse-animation opacity-20">⚖️</div>
        <div className="absolute top-2/3 left-1/6 text-3xl float-diagonal-animation opacity-15">🌱</div>
        <div className="absolute bottom-1/3 right-1/6 text-4xl float-animation opacity-20">🎯</div>
        <div className="absolute top-1/5 left-3/4 text-3xl float-reverse-animation opacity-15">💡</div>
        <div className="absolute bottom-2/3 left-1/3 text-4xl float-diagonal-animation opacity-20">🎪</div>
        <div className="absolute top-4/5 right-1/3 text-3xl float-animation opacity-15">🏆</div>
        <div className="absolute bottom-1/4 left-2/3 text-4xl float-reverse-animation opacity-20">🎲</div>
        <div className="absolute top-1/2 right-1/6 text-3xl float-diagonal-animation opacity-15">🎸</div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">✨ What describes you best? ✨</h1>
          <p className="text-white text-xl">Select the option that best matches your current situation 👇</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {choices.map((choice) => (
            <Card
              key={choice.id}
              className={`cursor-pointer transition-all hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-blue-50 to-white border-4 border-white shadow-xl rounded-2xl ${
                selectedChoice === choice.id ? "ring-4 ring-[#ffdd00] shadow-2xl transform scale-105" : ""
              }`}
              onClick={() => handleChoice(choice.id)}
            >
              <CardHeader className="text-center pb-3">
                <div className="text-5xl mb-3">{choice.icon}</div>
                <CardTitle className="text-2xl text-[#007bff] font-bold">
                  <span className="text-[#ffdd00] font-extrabold text-3xl mr-2">{choice.title.split(" ")[0]}</span>
                  {choice.title.split(" ").slice(1).join(" ")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed text-gray-700 font-medium">
                  {choice.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedChoice && (
          <div className="text-center mt-8">
            <p className="text-lg text-white">🔄 Acknowledging your choice and preparing survey... 🎯</p>
          </div>
        )}
      </div>



      {/* ElevenLabs ConvAI widget */}
      <div className="fixed bottom-5 right-5 z-[1000]">
        <elevenlabs-convai agent-id="agent_7901k2qzw9cgekfvm4vtdj4dp5fb"></elevenlabs-convai>
      </div>
    </div>
  )
}
