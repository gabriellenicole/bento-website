export default function Gallery() {
  return (
    <div className="my-20 flex w-full max-w-xl flex-col items-center justify-center px-10 xl:max-w-none xl:px-20">
      <h2 className="mb-3 text-center text-4xl font-bold">my photo gallery.</h2>
      <p className="text-center text-lg font-light">some photos of me, or taken by me 📸</p>
      <div className="mt-20 grid grid-cols-2 gap-4 xl:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/C7ACB940-CD14-4087-B677-7D4324628526_1_105_c.jpeg?updatedAt=1728390696453"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/CE70C714-97F0-4028-88E1-46BFE789C650_1_105_c.jpeg?updatedAt=1728391307061"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/079C0B50-F868-462C-8D19-939D9060A0CD_1_105_c.jpeg?updatedAt=1728390696317"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/3905A695-58EE-4A55-A558-F5F4B17212D9_1_105_c.jpeg?updatedAt=1728391608977"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/2C2F0CC6-6B33-4ED1-89ED-B9DD20DD1A3E_1_105_c.jpeg?updatedAt=1728391580328"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/BC35E9B5-97B1-44BF-8613-91F04DBC4872_1_105_c.jpeg?updatedAt=1728390721533"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/3EA8424F-1802-49DC-8A88-E54E987878B2_1_105_c.jpeg?updatedAt=1728390891081"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/94C8D31B-B3BF-45DA-B110-16A55CFD012C_1_105_c.jpeg?updatedAt=1728391124054"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/75A4D5D5-ED4E-41C0-A9AA-E1500FA37BB3_1_105_c.jpeg?updatedAt=1728391390270"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-end gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/90171E0E-9779-4314-A736-3280421E3F55_1_105_c.jpeg?updatedAt=1728391595048"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/E66F3657-DC85-4E14-A8BF-C130A4798D62_1_105_c.jpeg?updatedAt=1728391715834"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ik.imagekit.io/gabriellenicole/F474697B-D380-41DA-BA42-1976F6EC7AED_1_105_c.jpeg?updatedAt=1728390891485"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
