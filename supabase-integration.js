
window.surauDb=(()=>{const client=window.supabase.createClient(window.SURAU_SUPABASE_URL,window.SURAU_SUPABASE_PUBLISHABLE_KEY);
async function session(){return(await client.auth.getSession()).data.session}
async function signIn(email,password){return client.auth.signInWithPassword({email,password})}
async function signOut(){return client.auth.signOut()}
async function loadConfig(){const{data,error}=await client.from("portal_config").select("config").eq("id",1).single();if(error)throw error;return data.config}
async function saveConfig(config){const s=await session();if(!s)throw Error("Sesi pentadbir diperlukan");const safe={...config};delete safe.password;delete safe.kariah;delete safe.khairat;const{error}=await client.from("portal_config").upsert({id:1,config:safe,updated_by:s.user.id,updated_at:new Date().toISOString()});if(error)throw error}
async function lookup(type,ic){return client.rpc(type==="khairat"?"lookup_khairat":"lookup_kariah",{p_ic:String(ic).replace(/\D/g,"")})}
async function request(type,p){return client.from("registration_requests").insert({request_type:type,full_name:p.name,ic_no:String(p.ic).replace(/\D/g,""),phone:p.phone||"",details:p})}
return{client,session,signIn,signOut,loadConfig,saveConfig,lookup,request}})();
