import{_ as e,c as a,a0 as i,o as t}from"./chunks/framework.CGHvQLJz.js";const g=JSON.parse('{"title":"Git Cheat sheet","description":"","frontmatter":{},"headers":[],"relativePath":"docs/gitcheat.md","filePath":"docs/gitcheat.md"}'),o={name:"docs/gitcheat.md"};function n(l,s,c,p,h,d){return t(),a("div",null,s[0]||(s[0]=[i('<h1 id="git-cheat-sheet" tabindex="-1">Git Cheat sheet <a class="header-anchor" href="#git-cheat-sheet" aria-label="Permalink to &quot;Git Cheat sheet&quot;">​</a></h1><h2 id="configure-tooling" tabindex="-1">Configure tooling <a class="header-anchor" href="#configure-tooling" aria-label="Permalink to &quot;Configure tooling&quot;">​</a></h2><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git config --global user.name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[name]&quot;</span></span></code></pre></div><blockquote><p>Sets the name you want attached to your commit transactions</p></blockquote><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git config --global user.email </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[email address]&quot;</span></span></code></pre></div><blockquote><p>Sets the email you want attached to your commit transactions</p></blockquote><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git config --global color.ui auto</span></span></code></pre></div><blockquote><p>Enables helpful colorization of command line output</p></blockquote><h2 id="branches" tabindex="-1">Branches <a class="header-anchor" href="#branches" aria-label="Permalink to &quot;Branches&quot;">​</a></h2><p>Branches are an important part of working with Git. Any commits you make will be made on the branch you are currently &quot;checked out&quot; to. Use <code>git status</code> to see which branch that is.</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git branch [branch-name]</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git checkout [branch-name]</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git merge [branch]</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git branch -d [branch-name]</span></span></code></pre></div><h2 id="create-repositories" tabindex="-1">Create repositories <a class="header-anchor" href="#create-repositories" aria-label="Permalink to &quot;Create repositories&quot;">​</a></h2><p>when starting with a new repository ,you need to do it once; either locally ,then push to github ,or by cloning an existing repository.</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git init</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git clone</span></span></code></pre></div><h2 id="synchronize-changes" tabindex="-1">Synchronize changes <a class="header-anchor" href="#synchronize-changes" aria-label="Permalink to &quot;Synchronize changes&quot;">​</a></h2><p>Synchronize your local repository with the remote repository on GitHub.com</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git fetch</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git merge</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git push</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git pull</span></span></code></pre></div><details class="details custom-block"><summary>Details</summary><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Updates your current local working branch with all new</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">commits from the corresponding remote branch on GitHub.</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">`git pull` is a combination of `git fetch` and `git merge`</span></span></code></pre></div></details><h2 id="make-changes" tabindex="-1">Make changes <a class="header-anchor" href="#make-changes" aria-label="Permalink to &quot;Make changes&quot;">​</a></h2><p>Browse and inspect the evolution of project files</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git log</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git log --follow [file]</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git diff [first-branch]...[second-branch]</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git show [commit]</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git add [file]</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git commit -m </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[descriptive message]&quot;</span></span></code></pre></div><h2 id="redo-commits" tabindex="-1">Redo commits <a class="header-anchor" href="#redo-commits" aria-label="Permalink to &quot;Redo commits&quot;">​</a></h2><p>Erase mistakes and craft replacement history</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git reset [commit]</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ git reset --hard [commit]</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">CAUTION!</p><p>Changing history can have nasty side effects. If you need to change commits that exist on GitHub (the remote), proceed with caution. If you need help, reach out at github.community or contact support.</p></div>',38)]))}const u=e(o,[["render",n]]);export{g as __pageData,u as default};