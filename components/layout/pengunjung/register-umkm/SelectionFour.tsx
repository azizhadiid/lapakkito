export default function SelectionFour() {
    return (
        <>
            {/* === Footer & Submit === */}
            <section className="space-y-6 pt-6 border-t">
                <div className="flex items-center">
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-[#4E4039]">
                        Syarat dan Ketentuan
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-zinc-100 bg-[#E65A4B] hover:bg-[#C9302C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors hover:cursor-pointer"
                >
                    Daftar Sekarang
                </button>
            </section>
        </>
    )
}