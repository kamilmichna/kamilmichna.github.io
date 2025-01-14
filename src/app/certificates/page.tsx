import { type Metadata } from 'next'
import solutionsArchitect from '@/images/certificates/solutions-architect.png'
import cloudPractitioner from '@/images/certificates/cloud-practitioner.png'
import developer from '@/images/certificates/developer.png'
import aiDevs from '@/images/certificates/aidevs.png'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Certificate from '@/components/Certificate'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

const certificates = [
  {
    name: 'AWS Certified Developer - Associate',
    description:
      'The AWS Certified Developer – Associate certification validates proficiency in developing, deploying, and debugging cloud-based applications using AWS. It demonstrates expertise in core AWS services, understanding of application lifecycle management, and the ability to write code for serverless applications while ensuring robust security and performance.',
    image: developer,
    date: 'September 27, 2024',
  },
  {
    name: 'AI Devs 2',
    description: 'AI Devs 2 is the second edition of an online course created by Adam Gospodarczyk, Jakub Mrugalski, and Mateusz Chrobok. It is aimed at developers interested in integrating large language models (LLMs) into application code. The course provides in-depth knowledge about the programmatic use of LLMs. The curriculum also covers topics like designing and managing long-term memory for models and leveraging vector databases.',
    image: aiDevs,
    date: 'August 22, 2024',
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    description: 'The AWS Certified Solutions Architect – Associate certification validates expertise in designing distributed systems on AWS. It demonstrates the ability to build secure, cost-efficient, and reliable architectures, select appropriate AWS services for a solution, and ensure scalability. This certification highlights proficiency in aligning architectural designs with organizational requirements and best practices.',
    image: solutionsArchitect,
    date: 'November 10, 2023',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    description: 'The AWS Certified Cloud Practitioner certification, earned on August 30, 2023, validates foundational knowledge of AWS cloud concepts, including core services, pricing models, and security best practices. It is ideal for professionals beginning their cloud journey, demonstrating a solid understanding of AWS architecture and its business impact.',
    image: cloudPractitioner,
    date: 'August 30, 2023',
  },
]

export const metadata: Metadata = {
  title: 'Certificates',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Certificates() {
  return (
    <SimpleLayout
      title="My certifications"
      intro="I have earned several AWS and AI certifications, demonstrating my expertise in cloud computing, machine learning, and artificial intelligence. These certifications reflect my commitment to staying at the forefront of technology and my deep understanding of advanced cloud and AI solutions."
    >
      {certificates.map((certificate) => (
        <Certificate
          key={certificate.name}
          logo={certificate.image}
          certificateName={certificate.name}
          certificateDesc={certificate.description}
          date={certificate.date}
        ></Certificate>
      ))}
    </SimpleLayout>
  )
}
