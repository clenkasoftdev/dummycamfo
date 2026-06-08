import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Fotogallerie — Medien' }

// CDN images from the 2022 event gallery already scraped
const GALLERY = [
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/44f142c5672aa8a2b9f8215f744a52df/digitaall_image_service01.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/c6c7e672ad4dc68caf06e973b0abac73/digitaall_image_service02.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/94964ca98cec8944267324b6eff8025d/digitaall_image_service03.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/b38197000d8f23c08d1e2582bbf679d6/digitaall_image_service04.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/63687447e3d9975a6402a74d05f4a96f/digitaall_image_service05.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/9ff60cc87d4d99790666df5c1b8ca420/digitaall_image_service06.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/f45a8e4a554add0432fe9a93d95d88fb/digitaall_image_service07.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/71e918bd4414b6dfcbc40cdf87df1f57/digitaall_image_service08.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/2c78b00c69422563ab9b1cc6591dcba5/digitaall_image_service09.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/c596bd3c38ebfe5c941b3f2509b6ae06/digitaall_image_service10.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/82475df3d5d3b98e9f2759e5d7ccafb0/digitaall_image_service11.jpg',
  'https://cloud-1de12d.becdn.net/media/iW=243&iH=162&oX=0&oY=0&cW=243&cH=162/4ff5928cc8f497d544ed07eea1745aa9/digitaall_image_service12.jpg',
]

export default function FotogalleriePage() {
  return (
    <>
      <PageHeader
        title="Fotogallerie"
        eyebrow="Medien"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Medien', href: '/medien/' },
          { label: 'Fotogallerie' },
        ]}
      />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="eyebrow mb-2">28. Jahrestagung 2022</p>
          <h2 className="font-display text-[24px] text-navy font-normal mb-8">
            Atlantic Congress Hotel, Essen
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {GALLERY.map((src, i) => (
              <div key={i} className="relative aspect-[3/2] overflow-hidden rounded-sm border border-grey-200
                                      hover:opacity-90 transition-opacity">
                <Image
                  src={src}
                  alt={`Foto ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
