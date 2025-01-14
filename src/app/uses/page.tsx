import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Recommendations',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Recommendations() {
  return (
    <SimpleLayout
      title="Awesome tools that needs to be recommended"
      intro="List of awesome, mostly free & open source technologies."
    >
      <div className="space-y-20">
        <ToolsSection title="AI & automation">
          <Tool title="n8n">
            I use n8n for automating workflows and integrating different services.
            Its flexibility and customization options make it an essential tool
            for streamlining my development process.
          </Tool>
          <Tool title="Langchain & Langgraph">
            Langchain is an AI platform that enables developers to build and deploy AI models faster and more efficiently. It provides a wide range of features such as data preparation, model training, and deployment, allowing developers to focus on building AI models without worrying about the underlying infrastructure. Langchain is particularly useful for building conversational AI models, natural language processing (NLP) models, and other AI applications that require large amounts of data and computing resources. Langgraph enhances those capabilities even more, allowing to create multi-agentic workflows
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Continue.dev">
            Open source copilot alternative that let's you to use different model providers.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Tailwind UI kit">
            Awesome design kit with bautifull components and templates.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Untrap for Youtube">
            Google extension that helps you focus on important Youtube content
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout >
  )
}
