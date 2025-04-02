import { cx } from "../../utils/cx"
import { deletePhotoCompany } from "../../services/companies"
import { dispatchDeletePhoto, useDeletePhoto } from "../../store/useDeletePhoto"

function ModalDeletePhoto() {
  const photo = useDeletePhoto(({ photo }) => photo)

  function close() {
    dispatchDeletePhoto()
  }

  async function handleOk() {
    if (photo) {
      await deletePhotoCompany(photo.companyId, photo.name)
      close()
    }
  }

  return (
    <div
      className={cx(
        "fixed bg-black/50 inset-0 w-full h-full transition-all flex items-center justify-center",
        photo ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0",
      )}
    >
      <section className="w-full bg-[#FFFFFF] p-6 gap-6 flex flex-col items-center max-w-[22.5rem] rounded-lg">
        <article className="w-full flex flex-col gap-3 items-center text-[#000000CC]">
          <h2 className="text-sm font-semibold leading-6">Remove the Photo?</h2>
          <p className="text-[13px] leading-5 font-normal">Are you sure you want to remove this Photo?</p>
        </article>
        <footer className="w-full grid grid-cols-2 gap-4">
          <button
            type="button"
            className="border border-[#00000033] bg-[#ffffff] w-full h-10 rounded-lg text-center font-semibold text-[13px] leading-5 flex items-center justify-center text-[#3B3B3B]"
            onClick={close}
          >
            No
          </button>
          <button
            type="button"
            className="shadow-primary-button bg-[#3B3B3B] w-full h-10 rounded-lg text-center font-semibold text-[13px] leading-5 flex items-center justify-center text-[#ffffff]"
            onClick={handleOk}
          >
            Yes, remove
          </button>
        </footer>
      </section>
    </div>
  )
}

ModalDeletePhoto.displayName = "ModalDeletePhoto"
export default ModalDeletePhoto
