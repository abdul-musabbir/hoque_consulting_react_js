import { slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
const OurBeautifulWorks: React.FC = () => {
  return (
    <motion.div className="py-24 bg-white">
      <div>
        <div className="flex mx-auto w-11/12 md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full">
            <div className="w-full">
              <div className="flex flex-col gap-16">
                <motion.div
                  variants={slideInFromTop}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <h2 className="text-blacks font-bold text-2xl xl:text-4xl">
                      Our Beautiful Works
                    </h2>
                    <p className="text-blacks text-opacity-80 font-normal md:w-[400px]">
                      Explore a selection of our beautiful and impactful
                      projects. We pride ourselves on delivering top-quality
                      results, whether it's a small task or a complex solution.
                      Every project is approached with the same level of
                      professionalism and care to help our clients succeed.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight(0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div>
                    <div>
                      <div>
                        <div className="space-y-3 coulmnss w-full">
                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/6d3f20b1-96c0-4441-a27e-8698f3895b8e/generations/e8c070ce-7228-41ab-8b74-c0535db83a14/variations/universal_upscale_0_e8c070ce-7228-41ab-8b74-c0535db83a14_0.jpg?w=512"
                            alt=""
                          />

                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/82ab6db9-a6ab-4a03-8b8d-41164550cdb2/generations/541d42dc-e101-40cd-86fd-404964cdcedd/Leonardo_Phoenix_a_cinematic_photograph_of_a_powerful_Ceratosa_3.jpg?w=512"
                            alt=""
                          />
                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/9824dfca-0a4c-47da-b0d3-f361e596127b/generations/bc99ec8f-e6f0-4883-aa17-358b434bacf0/variations/Default_A_standalone_orientalstyle_artwork_of_a_variety_of_sty_2_bc99ec8f-e6f0-4883-aa17-358b434bacf0_0.jpg?w=512"
                            alt=""
                          />
                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/43c70dc3-7ef1-4cd0-801f-bad7cc4a09b9/generations/dc0576bb-5f3b-4569-870a-c1eae5452bdc/Leonardo_Phoenix_a_highly_detailed_surreal_and_vibrant_cinemat_0.jpg?w=512"
                            alt=""
                          />
                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/79c5f029-01fe-4873-8589-ba7e049546f2/generations/f55e4923-6726-4cab-ac7a-95d9db606c62/variations/Default_watercolor_art_a_night_sky_with_a_deer_trees_and_stars_2_f55e4923-6726-4cab-ac7a-95d9db606c62_0.jpg?w=512"
                            alt=""
                          />
                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/f4c24841-717e-43ce-85ad-d06db7d4b5d7/generations/ecbba9d5-ff98-42b2-8069-883e67599b9c/Leonardo_Anime_XL_A_hyperrealistic_ultradetailed_8K_firstperso_0.jpg?w=512"
                            alt=""
                          />
                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/48c84129-0b07-4694-a7f8-426a6b25203b/generations/0b2f6a5a-4a4d-429d-ab9a-a55a498216a2/Leonardo_Anime_XL_Image_is_a_vibrant_detailed_animestyle_illus_0.jpg?w=512"
                            alt=""
                          />
                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/b2776aad-2ff0-4545-8d10-c904641c58ff/generations/23ad9cad-efae-4c69-83d5-3d1c43f7e4e4/AlbedoBase_XL_A_vintagestyle_illustration_of_a_cats_head_in_fu_2.jpg?w=512"
                            alt=""
                          />
                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/4bc3fda1-14f7-4387-89a4-d8f0dd27a9ff/generations/ccbf9c65-4766-42e6-9ea2-3488853910c1/variations/Default_A_terrifying_leopardjellyfish_hybrid_floating_through_3_ccbf9c65-4766-42e6-9ea2-3488853910c1_0.jpg?w=512"
                            alt=""
                          />
                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/8e2e3bc6-c08e-4cce-acce-47cb5383e917/generations/6a37bac6-71e9-4108-ba10-c2be802b7cf1/Leonardo_Anime_XL_house_in_the_rain_3.jpg?w=512"
                            alt=""
                          />
                          <img
                            className="w-full xl:w-[400px] rounded-2xl"
                            src="https://cdn.leonardo.ai/users/c78b0838-1bb7-4221-ad17-3938fe29a7be/generations/95440810-c1a1-49bc-b71f-496072f1e20e/Leonardo_Lightning_XL_watercolor_art_A_large_vibrant_bouquet_o_0.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurBeautifulWorks;
