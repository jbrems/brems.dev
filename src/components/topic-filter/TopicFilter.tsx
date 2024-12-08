'use client'

import { TopicFilterButton } from "@/components/topic-filter/topic-filter-button/TopicFilterButton"
import styles from './TopicFilter.module.css'
import { useState } from "react"

export function TopicFilter({ topics, className = '' }: { topics: string[], className?: string }) {
  const [hiddenTopics, setHiddenTopics] = useState<string[]>([])

  function handleToggleTopic(topic: string, visible: boolean) {
    const blogPostLinks = document.querySelectorAll(`[data-topic="${topic}"]`)
    blogPostLinks.forEach((blogPostLink) => {
      (blogPostLink as HTMLElement).style.maxHeight = visible ? '120px' : '0'
    })

    setHiddenTopics((hiddenTopics) => {
      if (visible) return hiddenTopics.filter(hiddenTopic => hiddenTopic !== topic)
      return [...hiddenTopics, topic]
    })
  }

  function handleToggleAllTopics(all: string, visible: boolean) {
    topics.forEach(topic => handleToggleTopic(topic, visible))
  }

  return <div className={`${styles.topicFilter} ${className}`}>
    <TopicFilterButton topic="All topics" visible={hiddenTopics.length === 0} toggle={handleToggleAllTopics} />
    {topics.map(topic => <TopicFilterButton key={topic} topic={topic} visible={!hiddenTopics.includes(topic)} toggle={handleToggleTopic} />)}
  </div>
}