# -*- mode: python -*-

block_cipher = None

bundled_files = [
					('build\\visualize.bundle.js', 'www\\build'),
					('css', 'www\\css'),
					('example-code', 'www\\example-code'),
					('favicons', 'www\\favicons'),
					('fonts', 'www\\fonts'),
					('js', 'www\\js'),
					('tupy', 'www\\tupy'),
					('tupy-reference', 'www\\tupy-reference'),
					('favicon.ico', 'www'),
					('index.html', 'www')
]

a = Analysis(['bottle_server.py'],
             pathex=['.'],
             binaries=[],
             datas=bundled_files,
             hiddenimports=[],
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher)
pyz = PYZ(a.pure, a.zipped_data,
             cipher=block_cipher)
exe = EXE(pyz,
          a.scripts,
          exclude_binaries=True,
          name='TuPy',
          debug=False,
          strip=False,
          upx=True,
          console=True,
          icon='favicon.ico' )
coll = COLLECT(exe,
               a.binaries,
               a.zipfiles,
               a.datas,
               strip=False,
               upx=True,
               name='bottle_server')
