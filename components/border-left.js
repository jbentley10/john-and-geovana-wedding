/**
 * 
 * @files border-left.js
 */

export default function BorderLeft() {
  return (
    // Keep this outside of the page styles so the border can go full width
    <>
      <div className={`hidden md:flex`}>
        <div className={`border-bottom--left w-7/12`} />
        <div className={`w-5/12 bg-gradient-to-r from-nude-2 to-nude-3`} />
      </div>
      <style jsx={true}>{`
        @media screen and (min-width: 768px) {
          .border-bottom--left {
            border-bottom: 4px solid #A20B5C;
          }
        }
      `}</style>
    </>
  )
}