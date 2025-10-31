export default function SelectionTwo() {
    return (
        <>
            {/* === 2. Sosial Media === */}
            <section>
                <h2 className="text-xl font-semibold text-[#4E4039] border-b pb-2 mb-6">
                    2. Sosial Media
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Kolom 1 Sosmed */}
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="instagram" className="block text-sm font-medium text-[#4E4039] mb-1">Link Instagram</label>
                            <input type="url" id="instagram" name="instagram" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div>
                            <label htmlFor="tiktok" className="block text-sm font-medium text-[#4E4039] mb-1">Link Tiktok</label>
                            <input type="url" id="tiktok" name="tiktok" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div>
                            <label htmlFor="facebook" className="block text-sm font-medium text-[#4E4039] mb-1">Link Facebook</label>
                            <input type="url" id="facebook" name="facebook" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                    </div>
                    {/* Kolom 2 Sosmed */}
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="shopee" className="block text-sm font-medium text-[#4E4039] mb-1">Link Shopee</label>
                            <input type="url" id="shopee" name="shopee" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div>
                            <label htmlFor="tokopedia" className="block text-sm font-medium text-[#4E4039] mb-1">Link Tokopedia</label>
                            <input type="url" id="tokopedia" name="tokopedia" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div>
                            <label htmlFor="gojek" className="block text-sm font-medium text-[#4E4039] mb-1">Link Gojek</label>
                            <input type="url" id="gojek" name="gojek" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                    </div>
                    {/* Kolom 3 Sosmed */}
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="grab" className="block text-sm font-medium text-[#4E4039] mb-1">Link Grab</label>
                            <input type="url" id="grab" name="grab" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div>
                            <label htmlFor="maxim" className="block text-sm font-medium text-[#4E4039] mb-1">Link Maxim</label>
                            <input type="url" id="maxim" name="maxim" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}